// import { Bar, BarChart, XAxis, YAxis } from 'recharts';
// import { RechartsDevtools } from '@recharts/devtools';

// const formatAxisTick = (value: any): string => {
//     return `*${value}*`;
// };

// const renderCustomBarLabel = ({ x, y, width, value }: any) => {
//     return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`value: ${value}`}</text>;
// };
// const RatingBar = () => {
//     return (
//         <div>
//             <BarChart width={600} height={300} data={data} margin={margin}>
//                 <XAxis
//                     dataKey="name"
//                     tickFormatter={formatAxisTick}
//                     label={{ position: 'insideBottomRight', value: 'XAxis title', offset: -10 }}
//                 />
//                 <YAxis label={{ position: 'insideTopLeft', value: 'YAxis title', angle: -90, dy: 60 }} />
//                 <Bar dataKey="uv" fill="#8884d8" label={renderCustomBarLabel} />
//                 <RechartsDevtools />
//             </BarChart>
//         </div>
//     );
// };

// export default RatingBar;