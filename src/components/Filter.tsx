import React, { Component } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface DummyPerson {
    id: number;
    name: string;
    unavailable: boolean;
}

interface Props {}

interface State {
    people: DummyPerson[];
    selectedPerson: DummyPerson;
}

export class Filter extends Component<Props, State> {
    // const [selectedPerson, setSelectedPerson] = useState(people[0])

    constructor() {
        super({});

        this.state = {
            selectedPerson: {
                id: 1,
                name: "Durward Reynolds",
                unavailable: false,
            },
            people: [
                { id: 1, name: "Durward Reynolds", unavailable: false },
                { id: 2, name: "Kenton Towne", unavailable: false },
                { id: 3, name: "Therese Wunsch", unavailable: false },
                { id: 4, name: "Benedict Kessler", unavailable: true },
                { id: 5, name: "Katelyn Rohan", unavailable: false },
            ],
        };
    }

    setSelectedPerson(person: DummyPerson) {
        console.log("person:", person);
    }

    render() {
        const { selectedPerson, people } = this.state;

        return (
            <div className="relative">
                <Listbox
                    value={selectedPerson}
                    onChange={(person) => this.setSelectedPerson(person)}
                >
                    <div className="relative">
                        <Listbox.Button className="w-full border-0 rounded-md h-14 flex items-center justify-between pt-0 pr-5 pb-0 pl-6 bg-light-primary dark:bg-dark-primary shadow-sm">
                            <span className="text-sm font-semibold text-light-text dark:text-dark-text">
                                {selectedPerson.name}
                            </span>
                            <span className="text-xs text-light-text dark:text-dark-text">
                                <FontAwesomeIcon icon={faChevronDown} />
                            </span>
                        </Listbox.Button>
                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Listbox.Options className="mt-1 p-5 absolute w-full overflow-auto rounded-md bg-light-primary dark:bg-dark-primary shadow-lg">
                                {people.map((person) => (
                                    <Listbox.Option
                                        key={person.id}
                                        value={person}
                                        disabled={person.unavailable}
                                        className="py-2 cursor-pointer text-light-text dark:text-dark-text"
                                    >
                                        {person.name}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
            </div>
        );
    }
}
