import { memo } from "react";
import "./range.styles.scss";
import { Slider } from "antd";
function Range({
  defaultValue = 0,
  value,
  min = 0,
  max = 100,
  onChange,
  step = 1,
}) {
  return (
    <>
      <Slider
        tipFormatter={null}
        className="RangeBox"
        defaultValue={defaultValue}
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={(e) => {
          onChange(e);
        }}
      />
    </>
  );
}

export default memo(Range);
