import React from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

type GymProps = {
  setGym: (position: google.maps.LatLngLiteral) => void;
};

const NearByGym = ({ setGym }: GymProps) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (val: string) => {
    setValue(val, false);
    clearSuggestions();
  
    const results = await getGeocode({ address: val });
    const { lat, lng } = await getLatLng(results[0]);
    setGym({ lat, lng });
    console.log("Selected gym location:", { lat, lng });
  };
  

   

  return (
    <Combobox onSelect={handleSelect}>
    <ComboboxInput
      placeholder="Search nearby gyms"
      className="bg-gray-300 w-60 h-[30px] rounded"
      value={value}
      disabled={!ready}
      onChange={(e) => setValue(e.target.value)}
    />
    <ComboboxPopover>
      <ComboboxList>
        {status === 'OK' && data.map(({ place_id, description }) => (
          <ComboboxOption key={place_id} value={description} />
        ))}
      </ComboboxList>
    </ComboboxPopover>
  </Combobox>
  
  );
};

export default NearByGym;
