import Wallet from '../components/Wallet'
import Search from '../components/Search'
import DatasetList from '../components/DatasetList'
import DatasetElement from '../components/DatasetElement'

export default function Home() {

  return (
    <>
      <Wallet />
      <Search />

      <div className="grid grid-cols-2 gap-2">
        <DatasetList />
        <DatasetElement />
      </div>
    </>
  )
}