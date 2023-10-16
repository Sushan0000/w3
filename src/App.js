import "./App.css";
import CostCalculator from "./CostCalculator";

function App() {
	const priceOfSingleVMPerHour = 0.5;
	return (
		<div className="App">
			<CostCalculator priceOfSingleVMPerHour={priceOfSingleVMPerHour} />
		</div>
	);
}

export default App;
