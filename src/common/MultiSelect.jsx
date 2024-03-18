import { useRef, useState } from "react";
import Select from "react-select";
import { Box, Text } from "@chakra-ui/react";
// import { DeleteIcon } from "@chakra-ui/icons";

const MultiSelect = () => {
  const [skills, setSkills] = useState([]);
  const SelectRef = useRef();
  // const handleDelete = (id) => {
  //   let newSkills = skills.filter((ele) => ele.id !== id);
  //   setSkills(newSkills);
  //   console.log(SelectRef.current);
  // };
  const options = [
    { value: "Html", label: "Html", id: 1 },
    { value: "Javascript", label: "Javascript", id: 2 },
    { value: "CSS", label: "CSS", id: 3 },
    { value: "Git", label: "Git", id: 4 },
    { value: "React", label: "React", id: 5 },
    { value: "Tailwind", label: "Tailwind", id: 6 },
    { value: "SASS", label: "SASS", id: 7 },
    { value: "Bootstrap", label: "Bootstrap", id: 8 },
    { value: "Next Js", label: "Next Js", id: 9 },
    { value: "Typescript", label: "Typescript", id: 10 },
    { value: "Algorithms", label: "Algorithms", id: 11 },
    { value: "Data-Structure", label: "Data-Structure", id: 12 },
    { value: "Styled Component", label: "Styled Component", id: 13 },
  ];
  return (
    <>
      <Select
        ref={SelectRef}
        options={options}
        isMulti
        name="colors"
        className="basic-single"
        classNamePrefix="select"
        isSearchable={true}
        onChange={(e) => {
          setSkills(e);
        }}
      />
      <Box className="flex gap-5 my-4 flex-wrap">
        {skills.length == 0
          ? "No Skills Added"
          : skills.map((skill) => {
              return (
                <Text
                  key={skill?.id}
                  className="bg-slate-600 p-2 rounded-lg text-white relative shadow-lg capitalize"
                >
                  {skill.value}
                  {/* <Button
                    variant=""
                    className="deleteSkill"
                    onClick={() => handleDelete(skill.id)}
                  >
                    <DeleteIcon color="red.500" />
                  </Button> */}
                </Text>
              );
            })}
      </Box>
    </>
  );
};

export default MultiSelect;
