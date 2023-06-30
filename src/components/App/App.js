import { CustomNavBar } from '../CustomNavBar';
import { CreatePost } from '../CreatePost'
import { PaginationTable } from '../PaginacionTable';


function App() {

  return (
    <>
      <CustomNavBar />
      <CreatePost />
      
      <PaginationTable />
    </>
  );
}

export default App;
