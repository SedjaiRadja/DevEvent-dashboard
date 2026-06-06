import AppCharts from "../components/AppCharts"
import AppAreaCharts from "../components/AppAreaCharts"
import AppPieChart from "../components/AppPieChart"
import {CardList} from "../components/CardList"
import ToDoList from "../components/ToDoList"
function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">

      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppCharts />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="popular content" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <ToDoList />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg"><AppPieChart/></div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppAreaCharts /></div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="latest Transactions" />
      </div>

    </div>
  );
}

export default Home;
