import './Chart.css'
import ChartBar from './ChartBar/ChartBar'
const Chart = (props) => {
  const dataPointValue = props.dataPoints.map((datapoint) => datapoint.value)
  const maxValue = Math.max(...dataPointValue)
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={maxValue}
          label={datapoint.label}
        />
      ))}
    </div>
  )
}
export default Chart
