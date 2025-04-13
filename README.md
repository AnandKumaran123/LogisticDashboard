📄 Logistics Manager Dashboard – React Native App Documentation
📌 Project Overview
This mobile dashboard helps logistics managers monitor and track shipment status, driver activity, and delivery KPIs efficiently. Built using React Native, it leverages Redux for state management, uses mock data to simulate real-time behavior, and includes modular components for maintainability and scalability.
✅ Feature-to-Implementation Mapping
Each requirement from the task brief is documented below.
🔝 Top Section (Header)
- Welcome message using time-based greeting.
- Date & time updated every second using setInterval.
- Bell icon shows unread count, navigates to ScreenB.
 Code Location: src/Screens/ScreenA/index.js
🚚 Shipment Summary Cards
- Shipments in Transit: Blue card with car icon.
- Delivered Today: Green card with checkmark icon.
- Delayed Shipments: Red card with alert icon.
- All cards implemented as reusable Card.js.
 Code Location: src/Screens/Reusuablecomponents /DriverCard.js
 Usage Location: src/Screens/ScreenA/index.js

👨‍✈️ Driver Activity Section
- Displays driver name, status (Active/Offline), shipment ID, and last seen time.
- Color dot indicates status.
- Componentized into DriverCard.js.
Code Location: src/Screens/ Reusuablecomponents /index.js
Usage Location: src/Screens/ScreenA/index.js
📊 Delivery KPIs Section
- Donut chart shows On-time vs Delayed % using react-native-pie-chart.
- Data passed via props from mock data.
- Displayed in PieChartSection.js.
Code Location: src/Screens/ Reusuablecomponents /PieChartSection.js
Usage Location: src/Screens/ScreenA/index.js

🕒 Recent Alerts Section
- Timeline of alerts like delays, disconnections.
- Rendered via AlertTimeline.js component.
Code Location: src/Screens/ScreenB/index.js
NOTE:Used Redux to fetch data using Useselector Hook and mapped.
Also I made one button onclick it will add to redux and change mapped items one by one.(Commented this code for future reference)
🛠️ Technical Stack & Libraries
- Framework: React Native
- State: Redux Toolkit
- Navigation: React Navigation (stack)
- Styling: StyleSheet (extendable to styled-components)
- Chart: react-native-pie-chart
- Storage: AsyncStorage
⚙️ Bonus Features Implemented
- Pull to refresh using RefreshControl.(Pulled to add more Data and piechart value change)
- Real-time behavior with setInterval/setTimeout.
- Modular architecture with reusable components.
🧪 Mock Data & Error Handling
- Mock JSON data simulates API fetch.
- Cached with AsyncStorage.
- Fallback and error boundaries included.
📁 Project Structure Summary
src/
├──Reusuable Components/
│   ├── Card.js
│   ├── DriverCard.js
│   ├── PieChartSection.js
├── Header.js
│   
├── Redux/Store/store.js
├── Screens/
│   ├── ScreenA/index.js
│   ├── ScreenB/index.js
│   └── Navigation/RouteNavigation.js


App Icon Integration: Though not part of the original requirements, a custom app icon was added to enhance branding.(JTW) The icon was downloaded from a LinkedIn website and integrated into  project configurations.
🧾 Conclusion
This app satisfies all major requirements of the logistics dashboard, including shipment tracking, driver monitoring, KPIs visualization, and real-time alert handling, all in a responsive and scalable React Native architecture.
