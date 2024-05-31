import { 
  ScheduleComponent, Month, Inject, ViewsDirective, ViewDirective, Week, Resize, DragAndDrop
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

const App = () => {
  const eventSettings = { dataSource: scheduleData, ignoreWhitespace: true };
  return (
    <ScheduleComponent width='100%' height='550px' selectedDate={new Date(2024, 1, 7)} 
    eventSettings={eventSettings} rowAutoHeight={true}>
      <ViewsDirective>
        <ViewDirective option='Month' />
        <ViewDirective option='Week' />
      </ViewsDirective>
      <Inject services={[Month, Week, Resize, DragAndDrop]} />
    </ScheduleComponent>
  );
};
export default App;