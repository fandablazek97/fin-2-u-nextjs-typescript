import { useEffect, useRef, useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

interface RangeSliderProps {
  changeData?: any;
  id: string;
  min: number;
  max: number;
  step: number;
  title: string;
  unit?: string;
  defaultValue?: number;
}

export default function RangeSlider({
  changeData,
  id,
  min,
  max,
  step,
  title,
  unit,
  defaultValue,
}: RangeSliderProps) {
  const [value, setValue] = useState<any>(defaultValue);
  const [contentShown, setContentShown] = useState<"span" | "input">("span");
  const inputRef: any = useRef();

  function setValueAndInputData(e: number) {
    changeData(id, e);
    setValue(e);
  }

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  // useEffect(() => {
  //   changeData(id, min);
  //   min > value && setValue(min);
  //   max < value && setValue(max);
  // }, [min, max]);

  return (
    <div id={id} className="mx-auto mb-16 flex w-full flex-col">
      <div className="flex flex-row justify-between">
        <span className="block text-sm font-semibold leading-tight text-rich sm:text-lg">
          {title}
        </span>
        <span
          className={`hidden h-[34px] min-w-[120px] cursor-pointer self-end text-right text-sm font-semibold leading-tight text-rich transition-opacity duration-150 hover:opacity-60 sm:text-lg ${
            contentShown === "span" && "!block"
          }`}
          onClick={() => {
            setContentShown("input");
            setTimeout(() => {
              inputRef.current.focus();
            }, 50);
          }}
        >
          {unit?.includes("Kč")
            ? value.toLocaleString() + " " + unit
            : value + " " + unit}
        </span>
        <input
          name={id}
          type="number"
          ref={inputRef}
          className={`hidden w-28 rounded-sm px-2 py-1 text-right outline-none ring-secondary focus:ring-2
           ${contentShown === "input" && "!block"}`}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onBlur={() => {
            if (value < min) {
              setValueAndInputData(min);
            } else if (value > max) {
              setValueAndInputData(max);
            } else {
              setValueAndInputData(value);
            }
            setContentShown("span");
          }}
        ></input>
      </div>
      <div className="mt-6 flex w-full justify-between">
        <button
          className="flex items-center justify-center rounded-full bg-primary p-2.5 text-xl text-white outline-none transition-colors duration-150 hover:bg-primary/80 focus-visible:ring-4 focus-visible:ring-primary/70 sm:p-3.5"
          onClick={() =>
            value >= min + step &&
            setValueAndInputData(parseFloat(value) - step)
          }
        >
          <HiMinus />
        </button>
        <div className="relative flex w-4/5 items-center">
          <input
            type="range"
            min={min}
            max={max}
            value={value}
            step={step}
            className="slider h-2 w-full appearance-none rounded-lg bg-body-200 opacity-80 outline-none transition duration-200 hover:opacity-100"
            onChange={(e) => setValueAndInputData(parseFloat(e.target.value))}
          />
        </div>
        <button
          className="flex items-center justify-center rounded-full bg-primary p-2.5 text-xl text-white outline-none transition-colors duration-150 hover:bg-primary/80 focus-visible:ring-4 focus-visible:ring-primary/70 sm:p-3.5"
          onClick={() =>
            value <= max - step &&
            setValueAndInputData(parseFloat(value) + step)
          }
        >
          <HiPlus />
        </button>
      </div>
    </div>
  );
}
