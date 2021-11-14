import { PieChart } from 'react-minimal-pie-chart';




function Dashboard() {
    return (
        <div className="wrap">
            <div className="chart">
            <h1 className="chartText">Current Allocation</h1>
            <PieChart
                data={[
                { title: 'One', value: 10, color: '#033270' },
                { title: 'Two', value: 15, color: '#CB1B16' },
                { title: 'Three', value: 20, color: '#FEDFD4' },
                { title: 'Three', value: 20, color: '#9DCEE2' },
                ]}
            />
            </div>
            <div className="chart">
            <h1 className="chartText">Future Allocation</h1>
            <PieChart
                data={[
                { title: 'One', value: 10, color: '#1368aa' },
                { title: 'Two', value: 15, color: '#9dcee2' },
                { title: 'Three', value: 20, color: '#f29479' },
                { title: 'Four', value: 20, color: '#ef3c2d' },
                ]}
            />
            </div>
        </div>
    );
}

export default Dashboard