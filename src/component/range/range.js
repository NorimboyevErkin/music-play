import "./range.styles.scss";
import { Slider } from "antd";
function Range({ defaultValue = 0, min, max, value = {}, width }) {
  const { seekValue, setSeekValue } = value;
  return (
    <Slider
      tipFormatter={null}
      className="RangeBox"
      min={min}
      max={max}
      style={{ width: width ? width : "100%" }}
      defaultValue={defaultValue}
      value={seekValue}
      onChange={(e) => setSeekValue(e)}
    />
  );
}

export default Range;
