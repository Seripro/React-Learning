import { Profiler } from "react";
import HeavyUI from "./HeavyUI";

export default function ProfilerBasic() {
  const handleMeasure = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    endTime
  ) => {
    console.log("id:", id);
    console.log("phase:", phase);
    console.log("actualDuration:", actualDuration);
    console.log("baseDuration:", baseDuration);
    console.log("endTime:", endTime);
  };
  return (
    <Profiler id="heavy" onRender={handleMeasure}>
      <HeavyUI delay={500}></HeavyUI>
      <HeavyUI delay={700}></HeavyUI>
      <HeavyUI delay={10000}></HeavyUI>
    </Profiler>
  );
}
