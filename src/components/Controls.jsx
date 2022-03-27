import React, { useState, useEffect } from "react"
import Search from "./Search"
import styled from "styled-components"
// import { CostomSelect } from "./CustomSelect"
import Select from "react-select"

const options = [
  {
    value: "Africa",
    label: "Africa",
  },
  {
    value: "America",
    label: "America",
  },
  {
    value: "Asia",
    label: "Asia",
  },
  {
    value: "Europe",
    label: "Europe",
  },
]

const Wrapper = styled.div`
  width: 100%;
  diplay: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 280px;
  @media (min-width: 767px) {
    diplay: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const CostomSelect = styled(Select)`
  background-color: var(--colors-ui-base);
  border-radius: var(--radii);
  font-family: var(--family);
  border: none;
  
  margin-top: 1rem;

  div {
    background-color: var(--colors-ui-base);
    color: var(--colors-text);
s
  }

  & > * {
    box-shadow: var(--shadow);
  }

  & input {
    padding-left: 2.5rem;
    color: var(--colors-text);
  }

  & * {
    color: var(--colors-text);
  }

  & > div[id] {
    background-color: var(--colors-ui-base);
  }

 
`
const Controls = ({ onSearch }) => {
  const [region, setRegion] = useState("")
  const [search, setSearch] = useState("")

  useEffect(() => {
    const regionValue = region?.value || ""
    onSearch(search, regionValue)

    //eslint-disable-next-line
  }, [search, region])
  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CostomSelect
        options={options}
        placeholder="Plese Enter somthing"
        isClearable
        isSearchable={false}
        onChange={setRegion}
      />
      {/* <CostomSelect options={options} /> */}
    </Wrapper>
  )
}

export default Controls
