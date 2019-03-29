import React, { useReducer, useState } from "react"
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

const NewItem = ({ dispatch }) => {
  /*
  * 3/29/19
  * Hooks take initial state as argument.
  * They return the name of the item in state,
  * as well as an updater function to handle changes to state.
  */
  const [itemName, setItem] = useState('');

  const handleChange = e => setItem(e.target.value)

  const addItem = () => {
    dispatch({ type: 'addItem', itemName });
    setItem('');
  }

  return (
    <Flex>
      <Input
        value={itemName}
        onChange={handleChange}
        onKeyPress={handleChange}
        placeholder="What do you need to buy?" />
      <Button onClick={addItem}>Add</Button>
    </Flex>
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'addItem':
      return [
        ...state,
        {
          itemName: action.itemName,
          key: new Date().toISOString(),
        }
      ];
    default:
      throw Error('Unknown action')
  }
}

const GroceryList = ({ listId, initialState }) => {
  const [listName, setListName] = useState(initialState.listName);
  const [groceryList, dispatch] = useReducer(reducer, initialState.groceryList);

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
      <TitleInput
        value={listName}
        onChange={e => setListName(e.target.value)}
        placeholder="Give your list a name"
      />
      {content}
      <NewItem dispatch={dispatch} />
    </Box>
  )
}

export default GroceryList