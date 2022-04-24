import { useRef, useState } from "react";
import clsx from "clsx";
import { ternaryConditions } from "../utils/ternaryConditions";
import ArrowIcon from "../icons/ArrowIcon";
import { AccordionProps } from "../../../types/coreUiTypes";

export function Accordion({ title, content }: AccordionProps) {
  const [active, setActive] = useState(false);
  const contentSpace = useRef<any>(null);
  return (
    <>
      <div
        className={clsx(
          "box-border p-3 appearance-none cursor-pointer flex justify-between mt-3",
          `${ternaryConditions(active, "bg-primary", "bg-gray-100")}`
        )}
        onClick={() => setActive(!active)}
      >
        <p
          className={clsx(
            "text-bold",
            `${ternaryConditions(active, "text-white", "text-black")}`
          )}
        >
          {title}
        </p>
        <ArrowIcon
          className={`${ternaryConditions(
            !active,
            "",
            "rotate-180"
          )} inline-block transform duration-700`}
          color={`${ternaryConditions(active, "white", "black")}`}
        />
      </div>
      <div
        ref={contentSpace}
        style={{
          maxHeight: `${
            !active ? "0px" : `${contentSpace?.current?.scrollHeight}px`
          }`,
        }}
        className="overflow-y-auto transition-max-height duration-700 ease-in-out overflow-y-hidden"
      >
        <div className="bg-primary ">
          <div className="bg-white ml-1">
            <div className="p-5">
              {content?.map((data, index) => (
                <div key={index} className="text-blue-700">
                  <a href={data} target="_blank" rel="noreferrer">
                    {data}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
