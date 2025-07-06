"use client";
import { useState, useEffect } from "react";

// import "@/registry/nextjs/components/switch/switch.css";
import { getOnToken } from "@/registry/universal/lib/colorUtils";

export interface LkSwitchProps {
  onClick?: (switchIsOn?: boolean) => void;
  offColor?: LkColorWithOnToken;
  onColor?: LkColorWithOnToken;
  value?: boolean;
}

export default function Switch({ onClick, offColor = "surfacevariant", onColor = "primary", value }: LkSwitchProps) {
  const [switchIsOn, setSwitchIsOn] = useState(value ? value : false);

  const switchThumbOffColor = getOnToken(offColor);
  const switchThumbOnColor = getOnToken(onColor);

  /**
   * Effect to call the onClick function passed from parent, if it exists.
   * Need to use an effect hook to avoid disrupting switch's native state change behavior
   * and to ensure the onClick function is called after the switch state has changed.
   * Always passes the current state of the switch, but the parent function can choose to ignore it.
   */

  function handleClick(newSwitchState: boolean) {
    const prevState = switchIsOn;

    setSwitchIsOn(newSwitchState);

    if (onClick) {
      // Call the onClick function with the previous state
      onClick(!prevState);
    }
  }

  return (
    <>
      <div
        data-lk-component="switch"
        onClick={() => handleClick(!switchIsOn)}
        data-lk-switch-state={switchIsOn ? "on" : "off"}
      >
        <div data-lk-component="switch-thumb" data-lk-switch-state={switchIsOn ? "on" : "off"}></div>
      </div>
      <style jsx>{`
        [data-lk-component="switch"] {
          position: relative;
          display: block;
          align-items: center;
          justify-content: start;
          width: var(--lk-size-xl);
          height: calc(var(--lk-size-md) + calc(var(--lk-size-2xs) * 2));
          background-color: var(--lk-${offColor});
          border-radius: 100em;

          &[data-lk-switch-state="on"] {
            background-color: var(--lk-${onColor});
          }
        }

        [data-lk-component="switch-thumb"] {
          position: absolute;
          top: 50%;
          left: var(--lk-size-2xs);
          right: auto;
          width: var(--lk-size-md);
          height: var(--lk-size-md);
          border-radius: 50%;
          background-color: var(--lk-${switchThumbOffColor});
          transform: translateY(-50%);
          transition: left 0.1s ease-out;
        }

        [data-lk-component="switch-thumb"][data-lk-switch-state="on"] {
          left: calc(100% - calc(var(--lk-size-md) + var(--lk-size-2xs)));
          background-color: var(--lk-${switchThumbOnColor});
        }
      `}</style>
    </>
  );
}
