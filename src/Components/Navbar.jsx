import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto mt-1 py-6 flex items-center justify-between border-b-[3px] border-red-600">
      <div className="nleft flex items-center">
        <img
          className="h-6"
          src="https://companieslogo.com/img/orig/FWONK.D-6358a63d.png?t=1720244491"
          alt="Company Logo"
        />
        <div className="links flex gap-14 ml-20 font-semibold">
          {["Home", "Race-Day", "Teams", "Drivers", "", "News"].map(
            (elem, index) =>
              elem.length === 0 ? (
                <span key={index} className="w-[2px] h-7 bg-red-600"></span>
              ) : (
                <a
                  key={index}
                  className="text-sm flex items-center gap-2"
                  href={index === 5 ? "https://www.google.com/search?sca_esv=28f8fab5923385a6&rlz=1C1RXQR_enIN1118IN1118&sxsrf=ADLYWIKwkqIcfSEgpD1nBDcm3VUk1oK0NA:1729025721124&q=f1&tbm=nws&source=lnms&fbs=AEQNm0DPvcmG_nCbmwtBO9j6YBzM68ZanC7g01Skprhw5JoufeOS3s50R2UVAdFKPiGec2s70dsafSzt3Srk8zYXgpdFG5FfofmzpwxUIJ5f2iIJrHTRoaSC7aulU2uwrHgJk4UGo5WLBV4m1G0HdtrY_kzqlNtPVe2l0044_OEmMZwujHb4tcBPX0LWuL1RlDJAQhZEFDHvVLHiGyUetf8GOS69ajMlXQ&sa=X&ved=2ahUKEwiw4ajfopGJAxXcRWcHHZ09N0MQ0pQJegQIEBAB&biw=1536&bih=703&dpr=1.25" : "#"}
                  target={index === 5 ? "_blank" : undefined} // Open "News" in new tab
                  rel={index === 5 ? "noopener noreferrer" : undefined} // Security for new tab
                >
                  {index === 1 || index === 2 || index === 3 ? (
                    <span
                      style={{ boxShadow: "0 0 0.75em #ff1c1c" }}
                      className="inline-block w-2 h-2 rounded-full bg-red-600"
                    ></span>
                  ) : null}
                  {elem}
                </a>
              )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
}

export default Navbar;
