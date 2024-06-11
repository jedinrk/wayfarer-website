import React from "react";
import Button from "./Button";

function Services() {
  return (
    <section className="py-[120px] bg-orange-100">
      <div className="max-w-320 m-auto space-y-14">
        <div>
          <h1 className="uppercase mb-[16px]">services</h1>
          <div className="flex justify-between">
            <h2>Green, efficient & reliable logistics</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Suspendisse ornare, eros dolor interdum nulla.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2">
          <div>Container 1</div>
          <div>Container 2</div>
          <div>Container 3</div>
          <div>Container 4</div>
          <div>Container 5</div>
          <div>Container 6</div>
        </div>
        <Button
          type={"submit"}
          title={"Let's Talk"}
          variant={"bg-lime-700"}
        />
      </div>
    </section>
  );
}

export default Services;
