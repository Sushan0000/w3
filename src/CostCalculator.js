import React, { useState } from "react";

const CostCalculator = ({ priceOfSingleVMPerHour }) => {
	const [vmNumber, setVMNumber] = useState(0);
	const costPerHour = vmNumber * priceOfSingleVMPerHour;
	const costPerDay = costPerHour * 24;
	const costPerMonth = costPerDay * 30;
	const costPerYear = costPerMonth * 12;

	return (
		<div>
			<h1>VM Cost Calculator</h1>
			<label for="vmNumber">Number of VMs</label>
			<input
				type="text"
				id="vmNumber"
				placeholder="Number of VMs"
				value={vmNumber}
				onChange={(e) => setVMNumber(e.target.value)}
			/>
			<div>
				<p>Cost per hour: {costPerHour}</p>
				<p>Cost per day: {costPerDay}</p>
				<p>Cost per month: {costPerMonth}</p>
				<p>Cost per year: {costPerYear}</p>
			</div>
		</div>
	);
};

export default CostCalculator;
