function _extends() {_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return _extends.apply(this, arguments);}const { DragDropContext, Draggable, Droppable } = ReactBeautifulDnd;
const { useState, useEffect, Fragment } = React;

const ITEM_TYPES = {
  CARD: "card",
  TASK: "task" };


const DATASET = {

	/* 1/3 début de "faire la liste des type d'exercice"  */
	tasks: {

		"task-1": { id: "task-1", content: "quiz" },
		"task-2": { id: "task-2", content: "d'ac ou pas d'ac" },
		"task-3": { id: "task-3", content: "paliers de notation" },
		"task-4": { id: "task-4", content: "minuteur oral de contrôle" },
		"task-5": { id: "task-5", content: "grand oral minuteur" },
		"task-6": { id: "task-6", content: "grand oral évaluation" },
		"task-7": { id: "task-7", content: "paliers de notation" },
		"task-8": { id: "task-8", content: "minuteur oral de contrôle" },
		"task-9": { id: "task-9", content: "diagramme" },
		"task-10": { id: "task-10", content: "diagramme" },		
		"task-11": { id: "task-11", content: "l'introduction" },
		"task-12": { id: "task-12", content: "carte mentale" },
		"task-13": { id: "task-13", content: "quiz" },
		"task-14": { id: "task-14", content: "texte à trous" },
		"task-15": { id: "task-15", content: "mots croisés" },
		"task-16": { id: "task-16", content: "mots cachés" },	
		"task-17": { id: "task-17", content: "interrogation" },
		"task-18": { id: "task-18", content: "pendu (sur cahier)" },
		"task-19": { id: "task-19", content: "pendu (sur tableau)" },
		"task-20": { id: "task-20", content: "matching words" },	
		"task-21": { id: "task-21", content: "puzzle" }, /* laisser une virgule au dernier item */
		
	},
	/* 1/3 fin de "faire la liste des type d'exercice"  */	

	
	/* 2/3 début de "placer les exercices dans les colonnes concernées"  */
		cards: {
		"card-1": {
		  id: "card-1",
		  title: "auteurs",
		  taskIds: ["task-1", "task-2"] },

		"card-2": {
			id: "card-2",
			title: "baccalauréat hlp",
			taskIds: ["task-3", "task-4", "task-5", "task-6"] },

		"card-3": {
			id: "card-3", 
			title: "baccalauréat φ", 
			taskIds: ["task-7", "task-8"] },
			
		"card-4": { 
			id: "card-4", 
			title: "dissertation",
			taskIds: ["task-9"] },

		"card-5": { 
			id: "card-5", 
			title: "explication de texte",
			taskIds: ["task-10", "task-11"] },

		"card-6": { 
			id: "card-6", 
			title: "notions",
			taskIds: ["task-12", "task-13", "task-14"] },
			
		"card-7": { 
			id: "card-7", 
			title: "repères",
			taskIds: ["task-15", "task-16", "task-17", "task-18", "task-19", "task-20", "task-21"] } /* ne pas mettre de virgule à la dernière colonne */
			
		},
	/* 2/3 fin de "placer les exercices dans les colonnes concernées"  */

	/* 3/3 début de "faire la liste des colonnes existantes (pas de virgule à la fin)"  */
  cardOrder: ["card-1", "card-2", "card-3", "card-4", "card-5", "card-6", "card-7" ] };
	/* 3/3 fin de "faire la liste des colonnes existantes"  */

const Container = styled.div`
  margin: 2em;
  display: flex;
  @media (max-width: 720px) {
    flex-direction: column;
  }
  align-items: center;
  justify-items: center;
`;
const Menu = styled.div`
  margin: 2em;
  display: flex;
  flex-direction: column;
`;
const Note = styled.div`
  font-size: 0.8em;
  margin: 20px 0;
`;
const NewCard = styled.div`
  font-size: 1em;
  color: grey;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
`;
function App() {
  const [dataset, _] = useState(() => {
    const savedDataset = localStorage.getItem("aleka-trello-board-dataset");
    const initialValue = JSON.parse(savedDataset);
    return initialValue || DATASET;
  });

  const [tasks, setTasks] = useState(dataset.tasks);
  const [cards, setCards] = useState(dataset.cards);
  const [cardOrder, setCardOrder] = useState(dataset.cardOrder);

  useEffect(() => {
    localStorage.setItem(
    "aleka-trello-board-dataset",
    JSON.stringify({ tasks, cards, cardOrder }));

  }, [tasks, cards, cardOrder]);

  const onAddNewCard = () => {
    const newCard = {
      id: "card-" + genRandomID(),
      title: "Titre",
      taskIds: [] };

    const newCardOrder = Array.from(cardOrder);
    newCardOrder.unshift(newCard.id);
    setCards({
      ...cards,
      [newCard.id]: newCard });

    setCardOrder(newCardOrder);
  };

  return /*#__PURE__*/(
    React.createElement(Container, null, /*#__PURE__*/
    React.createElement(Menu, null, /*#__PURE__*/
    React.createElement(Note, null, "Boîte à outil", /*#__PURE__*/
    React.createElement("br", null), "", /*#__PURE__*/
    React.createElement("br", null), "il faudrait pouvoir faire confirmer la suppression demandée. ", /*#__PURE__*/
    React.createElement("br", null), "Les modifications sont sauvegardées ! ", /*#__PURE__*/
    React.createElement("br", null), "Tout est modifiable.", /*#__PURE__*/
    React.createElement("br", null), "Il faudrait pouvoir mettre des images et des liens"), /*#__PURE__*/


    React.createElement(NewCard, { onClick: onAddNewCard }, "+ une colonne")), /*#__PURE__*/
	
	
	

    React.createElement(DragDropCards, {
      cards: cards,
      tasks: tasks,
      cardOrder: cardOrder,
      setCards: setCards,
      setTasks: setTasks,
      setCardOrder: setCardOrder })));

}

const CardsContainer = styled.div`
  margin: 2em;
  display: flex;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;
function DragDropCards({
  cards,
  tasks,
  cardOrder,
  setCards,
  setTasks,
  setCardOrder })
{
  const [editing, setEditing] = useState(null);

  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (
    !destination ||
    destination.droppableId === source.droppableId &&
    destination.index === source.index)
    {
      return;
    }

    if (type === ITEM_TYPES.CARD) {
      reorderCards(source, destination, draggableId);
    } else {
      // type === tasks
      const start = cards[source.droppableId];
      const finish = cards[destination.droppableId];
      if (start.id === finish.id) {
        reorderTasksWithinCard(
        start,
        source.index,
        destination.index,
        draggableId);

      } else {
        moveTask(start, finish, source.index, destination.index, draggableId);
      }
    }
  };

  const reorderCards = (source, destination, draggableId) => {
    const newCardOrder = Array.from(cardOrder);
    newCardOrder.splice(source.index, 1);
    newCardOrder.splice(destination.index, 0, draggableId);
    setCardOrder(newCardOrder);
  };

  const reorderTasksWithinCard = (
  card,
  sourceIdx,
  destinationIdx,
  draggableId) =>
  {
    const newTaskIds = Array.from(card.taskIds);
    newTaskIds.splice(sourceIdx, 1);
    newTaskIds.splice(destinationIdx, 0, draggableId);
    setCards({
      ...cards,
      [card.id]: {
        ...card,
        taskIds: newTaskIds } });


  };

  const moveTask = (start, finish, sourceIdx, destinationIdx, draggableId) => {
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(sourceIdx, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destinationIdx, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds };

    setCards({
      ...cards,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish });

  };

  const onAddNewTask = (cardID, content) => {
    const newTask = {
      id: "task-" + genRandomID(),
      content };

    setTasks({
      ...tasks,
      [newTask.id]: newTask });

    const newTaskIds = Array.from(cards[cardID].taskIds);
    newTaskIds.push(newTask.id);
    setCards({ ...cards, [cardID]: { ...cards[cardID], taskIds: newTaskIds } });
  };

  const onRemoveCard = cardID => {
    const newCardOrder = cardOrder.filter(id => id !== cardID);
    setCardOrder(newCardOrder);

    const cardTaskIds = cards[cardID].taskIds;
    cardTaskIds.forEach(taskID => delete tasks[taskID]);
    delete cards[cardID];
    setCards(cards);
    setTasks(tasks);
  };

  const onRemoveTask = (taskID, cardID) => {
    const newTaskIds = cards[cardID].taskIds.filter(id => id !== taskID);
    setCards({ ...cards, [cardID]: { ...cards[cardID], taskIds: newTaskIds } });
    delete tasks[taskID];
    setTasks(tasks);
  };

  const onSaveTitleEdit = (cardID, newTitle) => {
    if (newTitle !== cards[cardID].title) {
      setCards({
        ...cards,
        [cardID]: {
          ...cards[cardID],
          title: newTitle } });


    }
    setEditing(null);
  };

  const onSaveTaskEdit = (taskID, cardID, newContent) => {
    if (newContent.trim() === "") {
      onRemoveTask(taskID, cardID);
    } else if (newContent !== tasks[taskID].content) {
      setTasks({
        ...tasks,
        [taskID]: { ...tasks[taskID], content: newContent } });

    }
    setEditing(null);
  };

  return /*#__PURE__*/(
    React.createElement(DragDropContext, { onDragEnd: onDragEnd }, /*#__PURE__*/
    React.createElement(Droppable, { droppableId: "all-cards", direction: "horizontal", type: "card" },
    (provided) => /*#__PURE__*/
    React.createElement(CardsContainer, _extends({}, provided.droppableProps, { ref: provided.innerRef }),
    cardOrder.map((id, index) => {
      const card = cards[id];
      const cardTasks = card.taskIds.map(taskId => tasks[taskId]);
      return /*#__PURE__*/(
        React.createElement(Card, {
          key: card.id,
          card: card,
          tasks: cardTasks,
          index: index,
          onFocusClick: () => onFocusClick(card.id),
          onSaveTitleEdit: title => onSaveTitleEdit(card.id, title),
          onRemoveCard: () => onRemoveCard(card.id),
          onAddNewTask: content => onAddNewTask(card.id, content),
          onSaveTaskEdit: (taskID, newContent) =>
          onSaveTaskEdit(taskID, card.id, newContent),

          onTitleDoubleClick: () => setEditing(card.id),
          onTaskDoubleClick: task => setEditing(task.id),
          isTitleEditing: editing === card.id,
          isTaskEditing: task => editing === task.id }));


    }),
    provided.placeholder))));





}

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h3`
  padding: 8px;
  font-size: 1.5em;
  text-overflow: ellipsis;
`;
const Cross = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  text-align: right;
  color: grey;
`;
const CardContainer = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 15px;
  width: 220px;
  display: flex;
  flex-direction: column;
  background-color: white;
`;
const TaskList = styled.div`
  padding: 8px;
  background-color: ${(props) =>
props.isDraggingOver ? "skyblue" : "inherit"};
  min-height: 100px;
  height: 100%;
`;
const NewTaskBar = styled.div`
  display: flex;
`;
const NewTaskButton = styled.div`
  padding: 8px;
  margin: 8px;
  cursor: pointer;
  text-align: right;
  color: grey;
`;

function Card(props) {
  const [isAddingNewTask, setIsAddingNewTask] = useState(false);
  const onSaveTask = content => {
    if (content.trim() !== "") {
      props.onAddNewTask(content);
    }
    setIsAddingNewTask(false);
  };

  return /*#__PURE__*/(
    React.createElement(Draggable, { draggableId: props.card.id, index: props.index },
    (provided) => /*#__PURE__*/
    React.createElement(CardContainer, _extends({
      ref: provided.innerRef },
    provided.draggableProps, {
      id: props.card.id }), /*#__PURE__*/

    React.createElement(TitleBar, null,
    props.isTitleEditing ? /*#__PURE__*/
    React.createElement(EditInput, {
      key: props.card.id,
      value: props.card.title,
      onSave: props.onSaveTitleEdit,
      fontSize: "1.5em",
      margin: "20px 0 20px 8px" }) : /*#__PURE__*/


    React.createElement(Title, _extends({
      onDoubleClick: props.onTitleDoubleClick },
    provided.dragHandleProps),

    props.card.title), /*#__PURE__*/


    React.createElement(Cross, { onClick: props.onRemoveCard }, "x")), /*#__PURE__*/

    React.createElement(Droppable, { droppableId: props.card.id, type: "task" },
    (provided, snapshot) => /*#__PURE__*/
    React.createElement(Fragment, null, /*#__PURE__*/
    React.createElement(TaskList, _extends({
      ref: provided.innerRef },
    provided.droppableProps, {
      isDraggingOver: snapshot.isDraggingOver }),

    props.tasks.map((task, index) => /*#__PURE__*/
    React.createElement(Task, {
      key: task.id,
      task: task,
      index: index,
      onSaveTaskEdit: (content) =>
      props.onSaveTaskEdit(task.id, content),

      onTaskDoubleClick: () => props.onTaskDoubleClick(task),
      isTaskEditing: props.isTaskEditing(task) }))),



    provided.placeholder)), /*#__PURE__*/



    React.createElement(NewTaskBar, null,
    isAddingNewTask ? /*#__PURE__*/
    React.createElement(EditInput, {
      key: "newtask",
      value: "",
      onSave: onSaveTask,
      margin: "8px" }) : /*#__PURE__*/


    React.createElement(NewTaskButton, { onClick: () => setIsAddingNewTask(true) }, "+ un exercice")))));








}

const TaskContainer = styled.div`
  display: flex;
`;
const TaskContent = styled.div`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 15px;
  background-color: ${props => props.isDragging ? "lightgreen" : "white"};
  width: 100%;
`;
function Task(props) {
  return /*#__PURE__*/(
    React.createElement(TaskContainer, null,
    props.isTaskEditing ? /*#__PURE__*/
    React.createElement(EditInput, {
      key: props.task.id,
      value: props.task.content,
      onSave: props.onSaveTaskEdit,
      margin: "0 0 8px 0" }) : /*#__PURE__*/


    React.createElement(Draggable, { draggableId: props.task.id, index: props.index },
    (provided, snapshot) => /*#__PURE__*/
    React.createElement(TaskContent, _extends({},
    provided.draggableProps,
    provided.dragHandleProps, {
      ref: provided.innerRef,
      isDragging: snapshot.isDragging,
      onDoubleClick: props.onTaskDoubleClick }),

    props.task.content))));






}

const Input = styled.input`
  font-size: ${props => props.fontSize || "inherit"};
  font-family: inherit;
  margin: ${props => props.margin || "inherit"};
  padding: 8px;
  width: 100%;
`;
function EditInput(props) {
  const [val, setVal] = useState(props.value);
  return /*#__PURE__*/(
    React.createElement(Input, {
      type: "text",
      autoFocus: true,
      value: val,
      onChange: e => setVal(e.target.value),
      onKeyPress: event => {
        if (event.key === "Enter" || event.key === "Escape") {
          props.onSave(val);
          event.preventDefault();
          event.stopPropagation();
        }
      },
      onBlur: () => props.onSave(val),
      fontSize: props.fontSize,
      margin: props.margin }));


}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));

function genRandomID() {
  return (Math.random() + 1).toString(36).substring(7);
}