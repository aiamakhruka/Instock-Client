import InventoryPageHeader from '../../components/InventoryPageHeader/InventoryPageHeader';
import InventoryPageList from '../../components/InventoryPageList/InventoryPageList';
import './InventoryPage.scss';

function InventoryPage(){
    return (
        <div className="warehouse-page">
        <InventoryPageHeader/>
        <InventoryPageList />
        </div>
      );
}
export default InventoryPage;