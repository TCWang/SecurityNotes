import Vue from "vue";
import {
  Bar,
  Line,
  Doughnut,
  Pie,
  Scatter,
  Bubble,
  PolarArea,
  Radar,
} from "vue-chartjs/legacy";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement
);

Vue.component("LineChart", {
  extends: Line,
});

Vue.component("DoughnutChart", {
  extends: Doughnut,
});

Vue.component("BarChart", {
  extends: Bar,
});

Vue.component("PieChart", {
  extends: Pie,
});

Vue.component("ScatterChart", {
  extends: Scatter,
});

Vue.component("BubbleChart", {
  extends: Bubble,
});

Vue.component("RadarChart", {
  extends: Radar,
});
