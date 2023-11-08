import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();
  if (isLoading) return <Spinner />;
  const filterValue = searchParams.get("discount") || "all";
  let filteredValue;
  if (filterValue === "all") filteredValue = cabins;
  if (filterValue === "no-discount")
    filteredValue = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === "with-discount")
    filteredValue = cabins.filter((cabin) => cabin.discount !== 0);
  console.log(filterValue);
  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header role="row">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={filteredValue}
          render={(el) => <CabinRow cabin={el} key={el.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
