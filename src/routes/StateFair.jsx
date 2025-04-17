import { React, useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";




const StateFair = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const problem = useRef();
  const heuristic = useRef();
  const benchmarking = useRef();
  const designTest = useRef();
  const finalMockups = useRef();
  const nextSteps = useRef();

  const [problemRef, inViewProblem] = useInView();
  const [heuristicRef, inViewHeuristic] = useInView();
  const [benchmarkingRef, inViewBenchmarking] = useInView();
  const [designTestRef, inViewDesignTest] = useInView();
  const [finalMockupsRef, inViewFinalMockups] = useInView();
  const [nextStepsRef, inViewNextSteps] = useInView();

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ alignToTop: false, behavior: "smooth" });
  };

  
  return (
    <div>
      <div className=" md:flex justify-around bg-[#730220] w-auto overflow-hidden relative block z-20">
        <img
          className="md:pt-32 mt-36 lg:mt-6 lg:mb-6 p-5  lg:hidden md:hidden"
          width={500}
          height={500}
          src={"/src/assets/state-fair-images.svg"}
          alt="Aprender Screens"
        ></img>
        <div className=" font-Quicksand font-semibold md:pt-52 text-white md:pl-10 p-8">
          <div className="lg:pt-18 md:text-eight lg:text-eight text-six ">
            State Fair
          </div>
          <p className="md:text-four md:font-normal font-normal tracking-wide sm:mr-10 mb-5 ">
            <span className="font-bold">Role:</span> UX/UI Designer, Interaction
            Designer, UX Researcher
          </p>
          <p className="text-four font-normal tracking-wide sm:mr-10 ">
            <span className="font-bold">Key skills:</span> Figma, Design
            Thinking, Prototyping, Wireframing, CSS/HTML, JavaScript
          </p>
          <p className="text-four font-normal tracking-wide sm:mr-10 mt-5 ">
            <span className="font-bold"> Type of project:</span> Personal,
            Concept
          </p>
          <div className="mt-24"> </div>
        </div>
        <img
          className="md:pt-32 mt-36 lg:mt-6 lg:mb-6 p-5 hidden lg:block md:block"
          width={500}
          height={500}
          src={"/src/assets/state-fair-images.svg"}
          alt="Aprender Screens"
        ></img>
      </div>
      <div
        className="bg-white w-full drop-shadow-sm flex justify-between z-50 -top-1 sticky 
           overflow-scroll"
      >
        <button
          onClick={() => scrollTo(problem)}
          className="font-Quicksand text-lg  p-8 hover:text-[#730220]"
        >
          <div>The </div> <div> Problems</div>
          {inViewProblem && !inViewHeuristic ? (
            <div className=" h-1 bg-[#730220]" />
          ) : (
            <div className="h-1 bg-white" />
          )}
        </button>
        <button
          onClick={() => scrollTo(heuristic)}
          className="font-Quicksand p-8 text-lg hover:text-[#730220]"
        >
          <div>Heuristic</div>
          <div>Evaluation</div>
          {inViewHeuristic && !inViewBenchmarking ? (
            <div className=" h-1 bg-[#730220]" />
          ) : (
            <div className="h-1 bg-white" />
          )}
        </button>
        <button
          onClick={() => scrollTo(benchmarking)}
          className="font-Quicksand text-lg  p-8 hover:text-[#730220]"
        >
          <div className="mt-7">Benchmarking</div>
          {inViewBenchmarking && !inViewDesignTest ? (
            <div className=" h-1 bg-[#730220]" />
          ) : (
            <div className="h-1 bg-white" />
          )}
        </button>

        <button
          onClick={() => scrollTo(designTest)}
          className="font-Quicksand text-lg  p-8 hover:text-[#730220]"
        >
          <div>Design &</div>
          <div>Test</div>
          {inViewDesignTest && !inViewFinalMockups ? (
            <div className=" h-1 bg-[#730220]" />
          ) : (
            <div className="h-1 bg-white" />
          )}
        </button>

        <button
          onClick={() => scrollTo(finalMockups)}
          className="font-Quicksand text-lg  p-8 hover:text-[#730220]"
        >
          <div>Final</div>
          <div>Mockups</div>
          {inViewFinalMockups && !inViewNextSteps ? (
            <div className=" h-1 bg-[#730220]" />
          ) : (
            <div className="h-1 bg-white" />
          )}
        </button>

        <button
          onClick={() => scrollTo(nextSteps)}
          className="font-Quicksand text-lg  p-8 hover:text-[#730220]"
        >
          <div>Takeaways/</div> <div>Next Steps </div>
          {inViewNextSteps ? (
            <div className=" h-1 bg-[#730220]" />
          ) : (
            <div className="h-1 bg-white" />
          )}
        </button>
      </div>
      <div className="md:p-10 lg:p-40 mx-8 my-4 ">
        <div
        ref={problem}

          className=" scroll-m-52 font-semibold  font-Quicksand lg:text-2xl md:text-2xl md:mb-4 lg:mb-4 text-xl mb-4"
        >
          The Problems
        </div>
        <div ref={problemRef} className="">
          <div className="font-Quicksand md:text-xl lg:text-xl font-normal ">
            Just over a million people visit the Washington State Fair every
            year. Many of the attendees use the Washington State Fair mobile app
            to purchase tickets for concerts and shows. This projects uncovers
            usability issues in the Washington State Fair mobile app that users
            struggle with when purchasing tickets.
          </div>
        </div>
        <div>
          <div className="mx-auto">
            <div className="md:p-10 lg:p-40 mx-8 my-4 ">
              <div
                ref={heuristic}
                className="  scroll-m-52 font-semibold  font-Quicksand lg:text-2xl md:text-2xl md:mb-4 lg:mb-4 text-xl mb-4"
              >
                Usability Heuristic Evaluation
              </div>
              <div
                ref={heuristicRef}
                className=" font-Quicksand  md:block lg:block md:text-xl lg:text-xl mb-4 font-normal"
              >
                The project started off with a usability heuristic evaluation of
                the ticket purchasing process in the Washington State Fair mobile
                app. I used{" "}
                <a
                  className="underline hover:text-aprenderBlue"
                  href="https://www.nngroup.com/articles/ten-usability-heuristics/"
                >
                  {" "}
                  Jakob Nielsen's 10 general principles for interaction design.
                </a>
                Through this process I was able to identify some major usability
                issues users were having when they tried to purchase tickets for
                concerts and shows.
                <div className=" w ">
                  <div className="mt-7 mb-5 font-semibold text-stateFairBlue">
                    Below is a list if problems I uncoverd using the usability
                    heuristic evaluation.
                  </div>
                  <div className="mx-32 my-10">
                    <ul className="pt-3 leading-6 list-disc text-base">
                      {" "}
                      <li className="">
                        <span className="text-stateFairRed">Prices</span> for{" "}
                        <span className="text-stateFairRed">accessible</span> and{" "}
                        <span className="text-stateFairRed">non-accessible</span>{" "}
                        seats were
                        <span className="text-stateFairRed">
                          {" "}
                          NOT clearly displayed
                        </span>
                      </li>
                    </ul>
                    <ul className=" leading-8 list-disc text-base">
                      <li>
                        <span className="text-stateFairRed">
                          Accessible seats
                        </span>{" "}
                        in all locations
                        <span className="text-stateFairRed">
                          {" "}
                          were NOT clearly
                        </span>
                        <span> marked on the section map.</span>
                      </li>
                    </ul>
                    <ul className="leading-7 list-disc text-base">
                      <li>
                        The design
                        <span className="text-stateFairRed">
                          {" "}
                          DID NOT
                        </span> let{" "}
                        <span className="text-stateFairRed"> users know</span> if
                        a section{" "}
                        <span className="text-stateFairRed"> is sold out.</span>
                      </li>
                    </ul>
                    <ul className="leading-7 list-disc text-base ">
                      <li>
                        The
                        <span className="text-stateFairRed"> image size</span> of
                        the seats and sections maps were{" "}
                        <span className="text-stateFairRed">TOO small.</span>
                      </li>
                    </ul>
                    <ul className="leading-7 list-disc text-base">
                      <li>
                        <span className="text-stateFairRed">
                          Accessible seats
                        </span>{" "}
                        ARE NOT{" "}
                        <span className="text-stateFairRed">
                          {" "}
                          directly displayed
                        </span>{" "}
                        on the seat map.{" "}
                      </li>
                    </ul>
                    <ul className="list-disc text-base">
                      <li>
                        <span className="text-stateFairRed">
                          TOO many options
                        </span>{" "}
                        when selecting sections/seats is
                        <span className="text-stateFairRed"> confusing.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div ref={heuristicRef} className="font-Quicksand">
                <div className="mt-14 mb-5 font-semibold text-stateFairBlue">A detailed document of the usability heuristic evaluation.</div>
                <img alt="screen 1" src="/src/assets/h2.png"></img>
              </div>
            </div>
          </div>
          <div ref={benchmarkingRef} className="md:p-10 lg:p-40 mx-8 my-4">
            <div
            ref={benchmarking}

              className=" scroll-m-52 font-Quicksand font-semibold lg:text-2xl md:text-2xl md:mb-4 lg:mb-4 text-xl mb-4  "
            >
              Benchmarking
            </div>
            <div className="font-Quicksand md:text-xl lg:text-xl md:mb-8 lg:mb-8 mb-4 font-normal">
              I conducted a usability test on the ticket buying process using the
              System Usability Scale (SUS) framework{" "}
              <span className="font-bold">
                after I completed the heuristic evaluation{" "}
              </span>
              . I used these results to establish success metrics for future
              designs.
            </div>
            <div className=" font-Quicksand">
              <div className="lg:mb-4 md:mb-4">
                <div className="font-bold text-stateFairBlue lg:mb-2 md:mb-2">
                  {" "}
                  First Usability Test Results:{" "}
                </div>
                <ul className="list-disc pl-5">
                  <li className=""> Over all SUS score of 3.3 of 7. </li>
                  <li className="">
                    Only 40% of users were able to select accessible and
                    non-accessible seats.
                  </li>
                </ul>
              </div>
              <div className="leading-6">
                <div className="font-bold text-stateFairBlue lg:mb-2 md:mb-2">
                  Success Metrics:{" "}
                </div>
                <ul className="list-disc pl-5">
                  <li className="">Higher SUS score than the original design.</li>
                  <li className="pt-1">
                    Majority of users will be able to select accessible and not
                    accessible seats.
                  </li>
                </ul>
              </div>
              <div className="">
                <div className="font-bold lg:mt-8 md:mt-8 lg:mb-2 md:mb-2 text-stateFairBlue  mb-4 ">
                  {" "}
                  To reach success metrics I needed to design solutions to these
                  problems listed below.
                </div>
                <ul className="list-disc pl-5">
                  <li className="pt-1">
                    <span className="text-stateFairRed">Prices</span> for{" "}
                    <span className="text-stateFairRed">accessible</span> and{" "}
                    <span className="text-stateFairRed">non-accessible</span>{" "}
                    seats were
                    <span className="text-stateFairRed">
                      {" "}
                      NOT clearly displayed
                    </span>
                  </li>
                </ul>
                <ul className="list-disc  pl-5 ">
                  <li>
                    <span className="text-stateFairRed">Accessible seats</span> in
                    all locations
                    <span className="text-stateFairRed"> were NOT clearly</span>
                    <span> marked on the section map.</span>
                  </li>
                </ul>
                <ul className="list-disc  pl-5">
                  <li>
                    The design
                    <span className="text-stateFairRed"> DID NOT</span> let{" "}
                    <span className="text-stateFairRed"> users know</span> if a
                    section{" "}
                    <span className="text-stateFairRed"> is sold out.</span>
                  </li>
                </ul>
                <ul className=" list-disc  pl-5 pt-1">
                  <li>
                    The
                    <span className="text-stateFairRed"> image size</span> of the
                    seats and sections maps were{" "}
                    <span className="text-stateFairRed">TOO small.</span>
                  </li>
                </ul>
                <ul className=" list-disc  pl-5">
                  <li>
                    <span className="text-stateFairRed">Accessible seats</span>{" "}
                    ARE NOT{" "}
                    <span className="text-stateFairRed"> directly displayed</span>{" "}
                    on the seat map.{" "}
                  </li>
                </ul>
                <ul className=" list-disc  pl-5 pt-1">
                  <li>
                    <span className="text-stateFairRed">TOO many options</span>{" "}
                    when selecting sections/seats is
                    <span className="text-stateFairRed"> confusing.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
          ref={designTestRef}

            className="font-Quicksand md:p-10 lg:p-40 mx-8 my-4 "
          >
            <div
            ref={designTest}

              className=" scroll-m-72 font-semibold  lg:text-2xl md:text-2xl md:mb-4 lg:mb-4 mb-4 text-xl"
            >
              Design & Test
            </div>
            <div className=" lg:text-xl md:text-xl  ">
              <div className="font-normal">
                I{" "}
                <span className="font-bold md:text-xl lg:text-xl">
                  wrote user stories that addressed each usability issues the
                  heuristics evaluation uncovered
                </span>{" "}
                in the ticket buying process. For each user story I designed a
                solution, tested the design, analyzed feedback from the test, and
                incorporated relevant feedback back into the design. I{" "}
                <span className="font-bold">
                  stopped this process when the design met the
                </span>
                <span> success metrics. </span>
              </div>
            </div>

            <div className="lg:flex md:flex md:justify-between lg:justify-between md:mt-20 lg:mt-20 mt-32 ml-14">
              <div className="mt-32">
                <img
                  alt="test screen "
                  width={200}
                  src={"/src/assets/test-1.png"}
                ></img>
                <ul className="list-disc  text-xs ">
                  <li className="">
                    SUS Score:
                    <span className="text-stateFairRed"> 3.3 of 7</span>
                  </li>
                  <li className="w-2/3">
                    <span className="text-stateFairRed"> 40% </span>
                    of participants were able to select accessible and
                    non-accessible seats.
                  </li>
                </ul>
              </div>
              <div className="mt-32">
                <img
                  alt="test screen"
                  width={200}
                  src={"/src/assets/test-2.png"}
                ></img>
                <ul className=" text-xs   list-disc">
                  <li className="">
                    SUS Score:
                    <span className="text-stateFairRed"> 4.4 of 7</span>
                  </li>
                  <li className="w-2/3">
                    <span className="text-stateFairRed"> 50% </span>
                    of participants were able to select accessible and
                    non-accessible seats.
                  </li>
                </ul>
              </div>

              <div className="mt-32">
                <img
                  alt="test screen"
                  width={200}
                  src={"/src/assets/test-3.png"}
                ></img>
                <ul className="list-disc text-xs">
                  <li className="">
                    SUS Score:
                    <span className="text-stateFairRed"> 5.2 of 7</span>
                  </li>
                  <li className="w-2/3">
                    <span className="text-stateFairRed"> 80% </span>
                    of participants were able to select accessible and
                    non-accessible seats.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div
              ref={finalMockups}
              className=" grid grid-cols-1 md:p-10 lg:p-40 mx-8"
            >
              <div ref={finalMockupsRef} className="font-Quicksand">
                <div className="font-semibold  lg:text-2xl md:text-2xl md:mb-4 lg:mb-4 mt-8 text-xl mb-32">
                  Final Mockup
                </div>
                <div className=" ">
                  <div className=" md:flex lg:flex gap-10">
                    <div className="lg:w-[400px] mb-10">
                      <img
                        src={"src/assets/state-fair-screen-image-1.png"}
                        alt="Aprender Screens"
                        onClick={() => { }}
                      ></img>
                    </div>
                    <div>
                      <div
                        // onClick={() => {
                        //   setAppArrow1(true);
                        //   setAppArrow2(false);
                        //   setAppArrow3(false);
                        //   setAppArrow4(false);
                        //   setAppArrow5(false);
                        // }}
                        className="mb-6"
                      >
                        <div className="md:font-bold lg:font-bold font-bold md:mb-1 lg:mb-1 hover:text-stateFairRed md:active:ease-in-out lg:active:ease-in-out md:active:scale-95 lg:active:scale-95 lg:active:duration-200 md:active:duration-200">
                          User Control and Freedom
                        </div>
                        <div className="md:w-4/5 lg:w-4/5">
                          The ‘back to concerts’ button is in an easy to spot area.
                        </div>
                      </div>

                      <div
                        // onClick={() => {
                        //   setAppArrow2(true);
                        //   setAppArrow1(false);
                        //   setAppArrow3(false);
                        //   setAppArrow4(false);
                        //   setAppArrow5(false);
                        // }}
                        className="mb-6"
                      >
                        <div className="font-bold mb-1">Consistency and Standards</div>
                        <div className="lg:w-4/5">
                          The new design only uses one method for choosing sections, instead
                          of three.
                        </div>
                      </div>
                      <div
                        // onClick={() => {
                        //   setAppArrow3(true);
                        //   setAppArrow1(false);
                        //   setAppArrow2(false);
                        //   setAppArrow4(false);
                        //   setAppArrow5(false);
                        // }}
                        className="mb-6 mt-8"
                      >
                        <div className="font-bold mb-1">Visibility of System Status</div>
                        <div className="lg:w-4/5">
                          The new design lets users know if a section is sold out.{" "}
                        </div>
                      </div>

                      <div
                        // onClick={() => {
                        //   setAppArrow4(true);
                        //   setAppArrow1(false);
                        //   setAppArrow2(false);
                        //   setAppArrow3(false);
                        //   setAppArrow5(false);
                        // }}
                        className="mb-6"
                      >
                        <div className="font-bold mt-8">
                          Match Between System and the Real World
                        </div>
                        <div className="lg:w-4/5">
                          The new design uses the section map which reflects the real world.
                          Also accessible seats in all locations are clearly marked on the
                          section map.
                        </div>
                      </div>
                      <div
                        // onClick={() => {
                        //   setAppArrow5(true);
                        //   setAppArrow1(false);
                        //   setAppArrow2(false);
                        //   setAppArrow3(false);
                        //   setAppArrow4(false);
                        // }}
                        className="mt-8"
                      >
                        <div className="font-bold mb-1 mt-9">
                          Aesthetic and Minimalist Design
                        </div>
                        <div className="lg:w-4/5">
                          Only information relevant to selecting sections is present. All
                          prices for accessible and non-accessible seats are clearly
                          displayed.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:flex lg:flex mt-32 mb-32">
                    <div className="hidden lg:block md:block">
                      <div
                      // onClick={() => {
                      //   setAppArrow6((prev) => !prev);
                      // }}
                      >
                        <div className="font-bold md:w-2/5 lg:w-2/5">
                          Error Prevention
                        </div>
                        <div className="md:w-4/5 lg:-4/5">
                          The image size of the sections can cause the user to choose the
                          wrong section. In the new design the sections are expanded when
                          the user presses on them which can help them choose the section
                          they want.
                        </div>
                      </div>
                    </div>
                    <video
                      muted
                      autoPlay
                      loop
                      className=" md:w-[250px] lg:w-[250px] mb-10"
                      alt="Aprender Screens"
                      onClick={() => { }}
                    >
                      <source
                        src={"images/state-fair-screen-video-2.mov"}
                        type="video/mp4"
                      />
                    </video>
                    <div className="lg:hidden md:hidden block">
                      <div
                      // onClick={() => {
                      //   setAppArrow6((prev) => !prev);
                      // }}
                      >
                        <div
                        // className={`font-bold mb-1 md:w-2/5 lg:w-2/5 ${
                        //   showAppArrow6 && "text-stateFairRed"
                        // }`}
                        >
                          Error Prevention
                        </div>
                        <div className="md:w-4/5 lg:-4/5">
                          The image size of the sections can cause the user to choose the
                          wrong section. In the new design the sections are expanded when
                          the user presses on them which can help them choose the section
                          they want.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:flex lg:flex gap-10">
                    <video
                      muted
                      autoPlay
                      loop
                      className=" md:w-[250px] lg:w-[250px] mb-10"
                      alt="Aprender Screens"
                      onClick={() => { }}
                    >
                      <source src={"src/assets/trimVid.mov"} type="video/mp4" />
                    </video>

                    <div className="">
                      <div
                        // onClick={() => {
                        //   setAppArrow7(true);
                        //   setAppArrow11(false);
                        //   setAppArrow10(false);
                        //   setAppArrow8(false);
                        // }}
                        className="mb-6"
                      >
                        <div className="font-bold mb-1">Recognition rather than Recall</div>
                        <div className="lg:w-4/5 mb-6">
                          The prices for seats are clearly displayed and color coded to
                          match the seats on the seat map. The prices are no longer hidden
                          behind a button.
                        </div>
                        <div
                          // onClick={() => {
                          //   setAppArrow11(true);
                          //   setAppArrow7(false);
                          //   setAppArrow10(false);
                          //   setAppArrow8(false);
                          // }}
                          className="mb-6"
                        >
                          <div className={`font-bold mb-1`}>Error Prevention</div>
                          <div className="lg:w-4/5 mb-6">
                            The image size of the seats can cause the user to choose the
                            wrong seat. In the new design the rows are expanded when the
                            user presses on them which helps users to select the seat they
                            want without making a mistake.
                          </div>
                          <div
                            // onClick={() => {
                            //   setAppArrow10(true);
                            //   setAppArrow11(false);
                            //   setAppArrow7(false);
                            //   setAppArrow8(false);
                            // }}
                            className="mb-6"
                          >
                            <div
                            // className={`font-bold mb-1 ${
                            //   showAppArrow10 && "text-stateFairRed"
                            // }`}
                            >
                              Visibility of System Status
                            </div>
                            <div className="lg:w-4/5 mb-6">
                              The new design allows the user to easily see when a seat is
                              selected with a red checkmark.
                            </div>
                            <div
                            // onClick={() => {
                            //   setAppArrow8(true);
                            //   setAppArrow10(false);
                            //   setAppArrow11(false);
                            //   setAppArrow7(false);
                            // }}
                            >
                              <div
                              // className={`font-bold mb-1 ${
                              //   showAppArrow8 && "text-stateFairRed"
                              // }`}
                              >
                                Visibility of System Status
                              </div>
                              <div className="lg:w-4/5">
                                When seats have been selected the Add to Cart button is
                                activated by turning a deep red color.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
          ref={nextStepsRef}

            className="font-Quicksand md:p-10 lg:p-40 mx-8 my-4 "
          >
            <div
            ref={nextSteps}

              className=" scroll-m-52 font-semibold   lg:text-2xl md:text-2xl text-2xl mb-4"
            >
              Takeaways
            </div>
            <ul className=" ml-9 md:w-[43.75rem] lg:w-[43.75rem] md:mt-5 lg:mt-5 md:ml-9 lg:ml-9 leading-7 lg:mb-4 md:mb-4 list-disc">
              <li>
                The
                <span className="font-bold"> value of heuristics</span>{" "}
                evaluations as a <span className="font-bold">cheap, quick </span>{" "}
                way to
                <span className="font-bold"> uncover usability issues. </span>
              </li>
              <li>
                <span className="font-bold"> Keeping it simple</span> during the
                UI design process helped me get unstuck when got stuck.{" "}
              </li>
              <li>
                <span className="font-bold">Testing designs early and often</span>{" "}
                to catch and fix issues.{" "}
              </li>
              <li>
                Next time I would add an
                <span className="font-bold"> ‘time to finish task’</span> to my
                usability tests to measure the amount of time it took for users to
                select seats and sections.{" "}
              </li>
            </ul>
            <div className=" font-semibold  lg:text-2xl md:text-2xl md:mb-4 lg:mb-4 mb-4 text-2xl mt-4">
              Next Steps
            </div>
            <ul className="list-disc ml-9">
              <li>
                <span className="font-bold">
                  Discuss with developers and other stakeholders{" "}
                </span>
                the technical requirements for implementing the updated design.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  )
};

export default StateFair;
