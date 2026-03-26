import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const RatingBar = ({ ratings }) => {
    const margin = { top: 20, right: 40, left: 10, bottom: 20 };

    return (
        <div className="w-full bg-[#F7F7F7] mb-4">
            <h3 className="text-[#001931] font-bold text-xl">Ratings</h3>

            <div className="h-75 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={[...ratings].reverse()}
                        layout="vertical"
                        margin={margin}
                        barGap={10}
                    >
                        <XAxis
                            type="number"
                            axisLine={{ stroke: '#D1D5DB' }}
                            tickLine={false}
                            tick={{ fill: '#6B7280', fontSize: 18 }}
                        />
                        <YAxis
                            dataKey="name"
                            type="category"
                            tickLine={false}
                            axisLine={false}
                            tick={{ fill: '#4B5563', fontSize: 14 }}
                            width={60}
                        />
                        {/* <Tooltip
                            cursor={{ fill: 'transparent' }}
                            contentStyle={{ borderRadius: '4px', border: 'none' }}
                        /> */}
                        <Bar
                            dataKey="count"
                            fill="#FF8811"
                            barSize={24}
                            radius={[0, 2, 2, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>  
        </div>
    );
};

export default RatingBar;