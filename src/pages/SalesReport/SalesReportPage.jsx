import SalesTotals from '../../components/SalesReport/SalesTotals'
import SalesCharts from '../../components/SalesReport/SalesCharts'
import SalesTable from '../../components/SalesReport/SalesTable'
import Balance from '../../components/Balance'


function SalesReportPage() {
  return (
    <div className="wrapper">
      <header className="header">
          <h1 className="header-title md:text-4xl text-2xl">
            Sales Report
          </h1>
          <Balance/>
      </header>
      <SalesTotals />
      <SalesCharts />
      <SalesTable />
    </div>
  )
}

export default SalesReportPage