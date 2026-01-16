import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const statsData = [
  { name: "Jan", bookings: 400, revenue: 240 },
  { name: "Feb", bookings: 600, revenue: 380 },
  { name: "Mar", bookings: 900, revenue: 520 },
  { name: "Apr", bookings: 1200, revenue: 760 },
  { name: "May", bookings: 1500, revenue: 980 },
  { name: "Jun", bookings: 1800, revenue: 1250 },
];

const Statistics = () => {
  return (
    <section className="bg-base-200 pt-10 pb-20">
      {/* Heading */}
      <div className="text-center mb-16 px-4">
        <h2 data-aos="zoom-in" className="text-4xl md:text-5xl font-bold">
          Rent Wheels <span className="text-primary">Statistics</span>
        </h2>
        <p data-aos="zoom-in" className="mt-6 text-accent max-w-3xl mx-auto">
          Real growth backed by real journeys and satisfied customers.
        </p>
      </div>

      {/* Graphs */}
      <div className="mx-2 md:mx-12 grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">

        {/* Line Chart */}
        <div
          data-aos="fade-up"
          className="card bg-base-100 shadow-xl p-6 rounded-2xl"
        >
          <h3 className="text-xl font-semibold mb-4">
            Monthly Bookings Growth
          </h3>

          <div className="h-75 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={statsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="bookings"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                  animationDuration={1200}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="card bg-base-100 shadow-xl p-6 rounded-2xl"
        >
          <h3 className="text-xl font-semibold mb-4">
            Monthly Revenue (K BDT)
          </h3>

          <div className="h-75">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={statsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="revenue"
                  fill="#22c55e"
                  radius={[8, 8, 0, 0]}
                  animationDuration={1200}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div
        data-aos="zoom-in"
        className="mx-2 md:mx-12 grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 px-6 text-center"
      >
        <div className="card bg-base-100 shadow-md p-6 rounded-xl hover:scale-[1.03] transition-all duration-300">
          <h4 className="text-4xl font-bold text-primary">27K+</h4>
          <p className="text-accent mt-2">Total Rides</p>
        </div>

        <div className="card bg-base-100 shadow-md p-6 rounded-xl hover:scale-[1.03] transition-all duration-300">
          <h4 className="text-4xl font-bold text-primary">98%</h4>
          <p className="text-accent mt-2">Happy Clients</p>
        </div>

        <div className="card bg-base-100 shadow-md p-6 rounded-xl hover:scale-[1.03] transition-all duration-300">
          <h4 className="text-4xl font-bold text-primary">650+</h4>
          <p className="text-accent mt-2">Active Cars</p>
        </div>

        <div className="card bg-base-100 shadow-md p-6 rounded-xl hover:scale-[1.03] transition-all duration-300">
          <h4 className="text-4xl font-bold text-primary">12+</h4>
          <p className="text-accent mt-2">Cities Covered</p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
