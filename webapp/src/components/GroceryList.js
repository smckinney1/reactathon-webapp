import React from "react"
import { Box, Paragraph, Heading, Input, Flex, Button, styled } from "reakit"
import { theme } from "styled-tools"
import posed, { PoseGroup } from "react-pose"

const TitleInput = styled(Input)`
  font-weight: bold;
  font-size: ${theme("fontSize.3")};
  margin-bottom: 0.5em;
`

const Item = styled(Flex)`
  padding: 0.5em 0em;
  padding-right: 1em;
`

const PosedItem = posed.div({
  before: { opacity: 0, paddingLeft: 0 },
  enter: { opacity: 1, paddingLeft: 50 },
  exit: { opacity: 0, paddingLeft: 500 },
})

const ItemName = styled(Heading)`
  cursor: pointer;
  display: inline-block;
  padding: 0.5em 0;
`

const Strike = styled.span`
  display: inline-block;
  text-decoration: line-through;
  position: relative;
  left: -19px;
  &:before,
  &:after {
    content: "\00a0\00a0\00a0\00a0";
  }
`

const ListItem = ({ itemName, done }) => (
  <Item justifyContent="space-between">
    <ItemName as="span">
      {done ? <Strike>{itemName}</Strike> : itemName}
    </ItemName>
  </Item>
);

const NewItem = () => {
  // useState to keep state of the new item in input
  return (
    <Flex>
      <Input
        value={'do'}
        onChange={() => console.log('test')}
        onKeyPress={() => console.log('test')}
        placeholder="What do you need to buy?" />
      <Button>Add</Button>
    </Flex>
  );
};

const GroceryList = ({ listId }) => {
  const groceryList = [
    { itemName: 'pizza', done: true, key: 'temp1' },
    { itemName: 'beer', done: false, key: 'temp2' },
  ];
  let content;

  if (!groceryList.length) {
    content = <Paragraph>Add some groceries to your list below.👇</Paragraph>
  } else {
    content = groceryList.map((item, index) => (
      <ListItem
        key={item.key}
        done={item.done}
        itemName={item.itemName}
      />
    ));
  }

  return (
    <Box>
      <TitleInput value="Workshop Party" placeholder="Give your list a name" />
      {content}
      <NewItem />
    </Box>
  )
}

export default GroceryList