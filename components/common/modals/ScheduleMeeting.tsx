"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { useContext, useState } from "react";
import { Listbox } from "@headlessui/react";
import axios from "axios";
import React from "react";
import { useRouter } from "next/navigation";
import { useMldata } from "@/hooks/UserHook";
import { newmodalcontext } from "@/utils/ModalContextWrapper";

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: false },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

const ChooseItemList = ["Continent", "Country", "Events"];

const countryList = [
  "United Kingdom",
  "United States",
  "China",
  "France",
  "Japan",
  "Germany",
  "United Arab Emirates",
  "Singapore",
  "Australia",
  "Canada",
  "South Korea",
  "South Africa",
  "India",
  "Switzerland",
  "Brazil",
  "Russia",
  "Netherlands",
  "Sweden",
  "Mexico",
  "Kenya",
  "Italy",
  "Vietnam",
  "Egypt",
  "Turkey",
  "Argentina",
];

const ContinentList = [
  "Europe",
  "North America",
  "Asia",
  "Australia",
  "Africa",
  "South America",
];

const eventsList = [
  "Fintech, banking, innovation",
  "Fintech, digital innovation, startups",
  "Online marketplace, digital payments, globalization",
  "Haute couture, luxury brands, fashion trends",
  "Robotics, AI, future technology",
  "Innovation, entrepreneurship, tech ecosystem",
  "Business networking, luxury hospitality, event management",
  "Business innovation, tech startups, digital transformation",
  "Digital advertising, marketing strategies, consumer insights",
  "Tech startups, artificial intelligence, innovation ecosystem",
  "K-pop, gaming industry, technology innovation",
  "Tech innovation, entrepreneurship, venture capital",
  "Green technologies, sustainability, conservation",
  "Financial hub, fintech, innovation",
  "Bollywood, film production, entertainment industry",
  "Cryptocurrency, banking, financial technology",
  "Olympic Games, sports events, tourism",
  "AI development, tech innovation, machine learning",
  "Tech startups, innovation ecosystem, digital transformation",
  "Startups, innovation ecosystem, sustainability",
  "Business networking, entrepreneurship, startup ecosystem",
  "Film industry, entertainment business, celebrity culture",
  "Digital commerce, tech startups, e-commerce trends",
  "Art exhibitions, cultural heritage, contemporary art",
  "Social entrepreneurship, sustainable development, community empowerment",
  "Art history, cultural heritage, ancient civilization",
  "Tech startups, entrepreneurship, digital innovation",
  "Ancient civilization, archaeological discoveries, cultural heritage",
  "Automotive innovation, electric vehicles, future mobility",
  "Cultural diversity, historical landmarks, culinary delights",
  "Art exhibitions, tango performances, cultural immersion",
];

const ScheduleMeeting = () => {
  const { visible, setVisible } = useContext(newmodalcontext);
  const [selectedPerson, setSelectedPerson] = useState(ChooseItemList[0]);
  const [continent, setContinent] = useState(ContinentList[0]);
  const [country, setCountry] = useState(countryList[0]);
  const [events, setEvents] = useState(eventsList[0]);
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const { setData } = useMldata();
  const router = useRouter();

  const HandleData = async (event: React.FormEvent) => {
    event.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);

      try {
        const response = await axios.post(
          "http://localhost:5000/predict",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
            },
          }
        );
        setData(response.data);
        router.push("/dashboard/Portfolio");
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <Modal
      closeButton
      isOpen={visible}
      classNames={{
        closeButton: "text-neutral-500",
      }}
      className="bg-[#1E1E1E] border-neutral-600 border top-[20%]  md:w-[50%] fixed rounded z-50 p-4 md:rounded-xl"
      onClose={() => setVisible(false)}
    >
      <ModalContent>
        {(onclose) => {
          return (
            <>
              <ModalHeader>
                <p className="md:text-2xl text-xl w-full mt-2 md:px-4 text-white font-thin py-2 border-neutral-500/30 rounded tracking-wide">
                  Schedule Meeting
                </p>
              </ModalHeader>
              <ModalBody className="border border-neutral-500/30 rounded">
                <form ref={formRef} onSubmit={HandleData}>
                  <div className="p-4 relative">
                    <h1 className="md:text-base text-sm text-white font-thin pb-2 tracking-wide">
                      Select Geography or Events
                    </h1>
                    <Listbox
                      value={selectedPerson}
                      name="housing"
                      onChange={setSelectedPerson}
                    >
                      <Listbox.Button
                        placeholder="Select Geograpghy or Events"
                        className={
                          " w-full border text-sm font-mono border-neutral-500/30 rounded h-8 bg-[#3b3939] text-white"
                        }
                      >
                        {ChooseItemList[parseInt(selectedPerson)]}
                      </Listbox.Button>
                      <Listbox.Options
                        className={
                          " p-2 w-full py-4 mt-2 rounded min-w-max z-10  bg-[#3b3939] text-white  font-medium "
                        }
                      >
                        {ChooseItemList.map((item, index) => (
                          <Listbox.Option
                            className={"text-sm cursor-pointer font-light my-1"}
                            key={index}
                            value={index}
                          >
                            {item}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Listbox>
                  </div>
                  <div className="p-4 relative">
                    {parseInt(selectedPerson) === 0 ? (
                      <>
                        <h1 className="md:text-base text-sm text-white font-thin pb-2 tracking-wide">
                          Select Continent
                        </h1>
                        <Listbox
                          value={continent}
                          name={"t1"}
                          onChange={setContinent}
                        >
                          <Listbox.Button
                            className={
                              " w-full border text-sm font-mono border-neutral-500/30 rounded h-8 bg-[#3b3939] text-white"
                            }
                          >
                            {continent}
                          </Listbox.Button>
                          <Listbox.Options
                            className={
                              "absolute w-[89%] mt-2 border border-neutral-500/30 p-2 py-4 rounded min-w-max z-10  bg-[#3b3939] text-white  font-medium "
                            }
                          >
                            {ContinentList.map((item, index) => (
                              <Listbox.Option
                                className={
                                  " px-2 py-1 w-full text-xs rounded min-w-max z-10  bg-[#3b3939] text-white  font-medium "
                                }
                                key={index}
                                value={item}
                              >
                                {item}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Listbox>
                      </>
                    ) : parseInt(selectedPerson) === 1 ? (
                      <>
                        <h1 className="md:text-base text-sm text-white font-thin pb-2 tracking-wide">
                          Select Country
                        </h1>
                        <Listbox
                          value={country}
                          name={"t1"}
                          onChange={setCountry}
                        >
                          <Listbox.Button
                            className={
                              " w-full border text-sm font-mono border-neutral-500/30 rounded h-8 bg-[#3b3939] text-white"
                            }
                          >
                            {country}
                          </Listbox.Button>
                          <Listbox.Options
                            className={
                              "w-[92%] mt-2 absolute rounded z-10  bg-[#3b3939] py-4 text-white h-[150px] overflow-y-auto font-medium "
                            }
                          >
                            {countryList.map((item, index) => (
                              <Listbox.Option
                                className={
                                  " px-2 py-1 w-full text-xs rounded min-w-max z-10  bg-[#3b3939] text-white  font-medium "
                                }
                                key={index}
                                value={item}
                              >
                                {item}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Listbox>
                      </>
                    ) : parseInt(selectedPerson) === 2 ? (
                      <>
                        <h1 className="md:text-base text-sm text-white font-thin pb-2 tracking-wide">
                          Select Events
                        </h1>
                        <Listbox
                          value={events}
                          name={"t1"}
                          onChange={setEvents}
                        >
                          <Listbox.Button
                            className={
                              " w-full border text-sm text-ellipsis font-mono border-neutral-500/30 rounded h-8 bg-[#3b3939] text-white"
                            }
                          >
                            <p className="text-ellipsis py-1 h-8 whitespace-nowrap px-2 overflow-clip">
                              {events.substring(0, 28)}
                            </p>
                          </Listbox.Button>
                          <Listbox.Options
                            className={
                              "w-[92%] mt-2 py-4 absolute rounded z-10  bg-[#3b3939] text-white h-[150px] overflow-y-auto font-medium "
                            }
                          >
                            {eventsList.map((item, index) => (
                              <Listbox.Option
                                className={
                                  " px-2 py-1 w-full text-xs rounded min-w-max z-10  bg-[#3b3939] text-white  font-medium "
                                }
                                key={index}
                                value={item}
                              >
                                <p className="text-xs">
                                  {item.substring(0, 28)}
                                </p>
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Listbox>
                      </>
                    ) : (
                      <div></div>
                    )}
                    <button
                      type={"submit"}
                      className="h-10 mt-4 text-xs text-white border border-neutral-700/90 bg-neutral-900 rounded-lg w-full "
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </ModalBody>
            </>
          );
        }}
      </ModalContent>
    </Modal>
  );
};

export default ScheduleMeeting;
