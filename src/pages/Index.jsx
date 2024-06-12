import { useState } from "react";
import {
  Container,
  VStack,
  HStack,
  Input,
  Button,
  Checkbox,
  Text,
  IconButton,
  StackDivider,
  Box,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <HStack w="100%">
          <Input
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button onClick={addTask} colorScheme="teal">
            Add Task
          </Button>
        </HStack>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          borderColor="gray.200"
          borderWidth="2px"
          borderRadius="lg"
          p={4}
          w="100%"
          alignItems="stretch"
        >
          {tasks.length === 0 ? (
            <Text align="center">No tasks yet! Add a task to get started.</Text>
          ) : (
            tasks.map((task, index) => (
              <HStack key={index} spacing={4}>
                <Checkbox
                  isChecked={task.completed}
                  onChange={() => toggleTaskCompletion(index)}
                />
                <Text
                  as={task.completed ? "s" : ""}
                  flex="1"
                  textAlign="left"
                >
                  {task.text}
                </Text>
                <IconButton
                  icon={<FaTrash />}
                  colorScheme="red"
                  onClick={() => deleteTask(index)}
                />
              </HStack>
            ))
          )}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;