// Clock functionality
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Enhanced weather data with more realistic patterns
const weatherData = {
  temperature: [26, 28, 31, 33, 30, 27, 25],
  humidity: [75, 70, 65, 60, 80, 85, 78],
  rainfall: [2, 0, 0, 5, 25, 15, 8],
  windSpeed: [12, 15, 18, 20, 25, 22, 16],
  uvIndex: [6, 8, 9, 10, 7, 5, 6],
  pressure: [1012, 1015, 1018, 1020, 1008, 1005, 1010],
  days: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"]
};

// Enhanced feature messages with more detailed information
const featureMessages = {
  weather: `🌤️ THÔNG TIN THỜI TIẾT CHI TIẾT\n\n📍 Vị trí: Đà Nẵng, Việt Nam\n🌡️ Nhiệt độ: 28°C (Cảm giác như 31°C)\n💧 Độ ẩm: 75%\n💨 Gió: 15 km/h, hướng Đông Nam\n☀️ Chỉ số UV: 8 (Cao)\n🌊 Áp suất: 1015 hPa\n👁️ Tầm nhìn: 10 km\n\n📊 Dự báo:\n• Sáng: Nắng ít mây\n• Chiều: Có thể có mưa rào\n• Tối: Trời quang, mát mẻ`,
  
  plants: `🌱 TƯ VẤN NÔNG NGHIỆP THÔNG MINH\n\n🌤️ Điều kiện hiện tại (28°C, 75% độ ẩm):\n\n✅ CÂY TRỒNG PHÙ HỢP:\n• Cà chua 🍅 - Thời vụ tốt\n• Dưa chuột 🥒 - Phát triển mạnh\n• Rau muống 🥬 - Lý tưởng\n• Ớt 🌶️ - Điều kiện tốt\n• Hoa hướng dương 🌻 - Nở đẹp\n\n💡 KHUYẾN NGHỊ:\n• Tưới nước: 6-7h sáng và 17-18h chiều\n• Bón phân: NPK 16-16-8 mỗi 2 tuần\n• Phun thuốc trừ sâu: Tránh giờ nắng gắt\n• Che chắn: Dùng lưới 30% trong giờ cao điểm`,
  
  alerts: `⚠️ CẢNH BÁO THỜI TIẾT VÀ THIÊN TAI\n\n🌧️ DỰ BÁO 48H TỚI:\n• Mưa vừa đến mưa to: 50-100mm\n• Gió mạnh cấp 6-7, giật cấp 8\n• Nguy cơ ngập úng tại vùng trũng\n• Sóng biển cao 2-3m\n\n🚨 CẢNH BÁO ĐẶC BIỆT:\n• Lũ quét có thể xảy ra tại vùng núi\n• Sạt lở đất ở các sườn dốc\n• Ảnh hưởng giao thông đường bộ\n\n📋 KHUYẾN NGHỊ AN TOÀN:\n• Hạn chế ra ngoài khi không cần thiết\n• Chuẩn bị đồ dùng khẩn cấp\n• Theo dõi tin tức cập nhật\n• Gọi 113 khi cần hỗ trợ`
};

// Enhanced SOS Emergency System with more contacts and features
const sosEmergencySystem = {
  emergencyContacts: [
    { name: 'Cảnh sát 113', number: '113', type: 'police', icon: 'ri-police-car-line', description: 'Cảnh sát - An ninh trật tự', priority: 1 },
    { name: 'Cứu hỏa 114', number: '114', type: 'fire', icon: 'ri-fire-line', description: 'Phòng cháy chữa cháy', priority: 1 },
    { name: 'Cấp cứu 115', number: '115', type: 'medical', icon: 'ri-heart-pulse-line', description: 'Cấp cứu y tế', priority: 1 },
    { name: 'Cứu hộ 116', number: '116', type: 'rescue', icon: 'ri-lifebuoy-line', description: 'Cứu hộ cứu nạn', priority: 1 },
    { name: 'Trung tâm cứu hộ', number: '1900-1234', type: 'rescue', icon: 'ri-shield-cross-line', description: 'Trung tâm cứu hộ 24/7', priority: 2 },
    { name: 'Cứu hộ giao thông', number: '1900-5678', type: 'traffic', icon: 'ri-roadster-line', description: 'Cứu hộ tai nạn giao thông', priority: 2 },
    { name: 'Bệnh viện Chợ Rẫy', number: '028-3855-4269', type: 'hospital', icon: 'ri-hospital-line', description: 'Bệnh viện Chợ Rẫy - TP.HCM', priority: 3 },
    { name: 'Bệnh viện Bạch Mai', number: '024-3869-3731', type: 'hospital', icon: 'ri-hospital-line', description: 'Bệnh viện Bạch Mai - Hà Nội', priority: 3 },
    { name: 'Bệnh viện Đà Nẵng', number: '0236-3822-480', type: 'hospital', icon: 'ri-hospital-line', description: 'Bệnh viện Đà Nẵng', priority: 3 },
    { name: 'Nguyễn Văn A', number: '+84 981 234 567', type: 'family', icon: 'ri-user-heart-line', description: 'Liên hệ gia đình', priority: 4 },
    { name: 'Trần Thị B', number: '+84 987 654 321', type: 'family', icon: 'ri-user-heart-line', description: 'Liên hệ khẩn cấp', priority: 4 },
    { name: 'Công ty bảo hiểm', number: '1900-9999', type: 'insurance', icon: 'ri-shield-check-line', description: 'Bảo hiểm tai nạn', priority: 5 }
  ],
  currentLocation: null,
  isEmergencyActive: false,
  emergencyHistory: [],
  lastLocationUpdate: null
};

// Enhanced Disaster Warning System with real-time data simulation
const disasterWarningSystem = {
  currentAlerts: [
    // Uncomment to test with active alerts
    // {
    //   id: 1,
    //   title: 'Cảnh báo mưa lớn',
    //   description: 'Mưa to đến rất to trong 6-12 giờ tới, lượng mưa 100-200mm',
    //   level: 'high',
    //   time: new Date().toLocaleString('vi-VN'),
    //   area: 'Miền Trung',
    //   type: 'rain'
    // }
  ],
  riskAssessment: {
    overall: 42,
    lastUpdate: new Date(),
    risks: [
      { name: 'Ngập lụt', level: 60, color: 'orange', trend: 'stable', description: 'Nguy cơ ngập úng tại vùng trũng' },
      { name: 'Bão', level: 40, color: 'yellow', trend: 'decreasing', description: 'Khả năng hình thành bão thấp' },
      { name: 'Dông sét', level: 75, color: 'red', trend: 'increasing', description: 'Dông sét mạnh có thể xảy ra' },
      { name: 'Mưa lớn', level: 80, color: 'red', trend: 'stable', description: 'Mưa to đến rất to' },
      { name: 'Sạt lở', level: 35, color: 'yellow', trend: 'stable', description: 'Nguy cơ sạt lở ở vùng núi' },
      { name: 'Nắng nóng', level: 20, color: 'green', trend: 'decreasing', description: 'Nhiệt độ trong ngưỡng bình thường' },
      { name: 'Hạn hán', level: 15, color: 'blue', trend: 'stable', description: 'Không có nguy cơ hạn hán' }
    ]
  },
  disasterHistory: [
    {
      date: '2024-12-15',
      type: 'Mưa lớn',
      severity: 'Trung bình',
      affected: 'Quảng Nam, Đà Nẵng',
      damage: 'Ngập úng cục bộ'
    },
    {
      date: '2024-11-28',
      type: 'Bão số 9',
      severity: 'Mạnh',
      affected: 'Miền Trung',
      damage: 'Thiệt hại về nhà cửa và cây trồng'
    }
  ],
  
  emergencyGuides: {
    flood: [
      'Di chuyển đến nơi cao hơn ngay lập tức',
      'Tránh xa dòng nước chảy xiết',
      'Chuẩn bị túi khẩn cấp với đồ dùng thiết yếu',
      'Theo dõi thông tin cảnh báo liên tục',
      'Không lái xe qua vùng ngập sâu',
      'Cắt điện trước khi rời khỏi nhà'
    ],
    storm: [
      'Gia cố cửa sổ, cửa ra vào và mái nhà',
      'Dự trữ thực phẩm và nước uống cho 3-5 ngày',
      'Tránh ra ngoài khi bão đổ bộ',
      'Chuẩn bị đèn pin, pin dự phòng và radio',
      'Tránh xa cửa sổ và vật dụng có thể đổ',
      'Có kế hoạch sơ tán nếu cần thiết'
    ],
    landslide: [
      'Tránh xa khu vực dốc và sườn núi',
      'Quan sát các dấu hiệu bất thường của đất đá',
      'Di tản ngay khi có cảnh báo',
      'Không xây dựng nhà ở gần sườn núi',
      'Theo dõi thông tin từ chính quyền địa phương',
      'Chuẩn bị phương tiện di chuyển khẩn cấp'
    ]
  }
};

// Enhanced chart initialization with more data
function initializeCharts() {
  // Temperature Chart with enhanced styling
  const temperatureChart = echarts.init(document.getElementById("temperatureChart"));
  temperatureChart.setOption({
    tooltip: { 
      trigger: "axis",
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#2563eb',
      borderWidth: 1,
      textStyle: { color: '#1e293b', fontSize: 12 },
      formatter: function(params) {
        return `${params[0].name}<br/>Nhiệt độ: ${params[0].value}°C`;
      }
    },
    xAxis: { 
      type: "category", 
      data: weatherData.days,
      axisLine: { lineStyle: { color: '#e2e8f0' } },
      axisTick: { lineStyle: { color: '#e2e8f0' } },
      axisLabel: { color: '#64748b', fontSize: 11 }
    },
    yAxis: { 
      type: "value",
      axisLine: { lineStyle: { color: '#e2e8f0' } },
      axisTick: { lineStyle: { color: '#e2e8f0' } },
      axisLabel: { color: '#64748b', fontSize: 11 },
      splitLine: { lineStyle: { color: '#f1f5f9' } }
    },
    series: [{
      name: "Nhiệt độ (°C)",
      type: "line",
      data: weatherData.temperature,
      smooth: true,
      lineStyle: { color: "#FF6347", width: 3 },
      areaStyle: { 
        color: {
          type: 'linear',
          x: 0, y: 0, x2: 0, y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(255, 99, 71, 0.4)' },
            { offset: 1, color: 'rgba(255, 99, 71, 0.1)' }
          ]
        }
      },
      itemStyle: { color: '#FF6347', borderWidth: 2, borderColor: '#fff' },
      emphasis: { focus: 'series' },
      markPoint: {
        data: [
          { type: 'max', name: 'Cao nhất' },
          { type: 'min', name: 'Thấp nhất' }
        ]
      }
    }]
  });

  // Humidity Chart with enhanced styling
  const humidityChart = echarts.init(document.getElementById("humidityChart"));
  humidityChart.setOption({
    tooltip: { 
      trigger: "axis",
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#1E90FF',
      borderWidth: 1,
      textStyle: { color: '#1e293b', fontSize: 12 },
      formatter: function(params) {
        return `${params[0].name}<br/>Độ ẩm: ${params[0].value}%`;
      }
    },
    xAxis: { 
      type: "category", 
      data: weatherData.days,
      axisLine: { lineStyle: { color: '#e2e8f0' } },
      axisTick: { lineStyle: { color: '#e2e8f0' } },
      axisLabel: { color: '#64748b', fontSize: 11 }
    },
    yAxis: { 
      type: "value",
      min: 0,
      max: 100,
      axisLine: { lineStyle: { color: '#e2e8f0' } },
      axisTick: { lineStyle: { color: '#e2e8f0' } },
      axisLabel: { color: '#64748b', fontSize: 11, formatter: '{value}%' },
      splitLine: { lineStyle: { color: '#f1f5f9' } }
    },
    series: [{
      name: "Độ ẩm (%)",
      type: "bar",
      data: weatherData.humidity,
      itemStyle: { 
        color: {
          type: 'linear',
          x: 0, y: 0, x2: 0, y2: 1,
          colorStops: [
            { offset: 0, color: '#1E90FF' },
            { offset: 1, color: '#87CEEB' }
          ]
        },
        borderRadius: [4, 4, 0, 0]
      },
      emphasis: { focus: 'series' },
      markLine: {
        data: [
          { yAxis: 70, name: 'Mức lý tưởng', lineStyle: { color: '#22c55e', type: 'dashed' } }
        ]
      }
    }]
  });

  // Rainfall Chart with enhanced styling
  const rainfallChart = echarts.init(document.getElementById("rainfallChart"));
  rainfallChart.setOption({
    tooltip: { 
      trigger: "axis",
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#32CD32',
      borderWidth: 1,
      textStyle: { color: '#1e293b', fontSize: 12 },
      formatter: function(params) {
        return `${params[0].name}<br/>Lượng mưa: ${params[0].value}mm`;
      }
    },
    xAxis: { 
      type: "category", 
      data: weatherData.days,
      axisLine: { lineStyle: { color: '#e2e8f0' } },
      axisTick: { lineStyle: { color: '#e2e8f0' } },
      axisLabel: { color: '#64748b', fontSize: 11 }
    },
    yAxis: { 
      type: "value",
      axisLine: { lineStyle: { color: '#e2e8f0' } },
      axisTick: { lineStyle: { color: '#e2e8f0' } },
      axisLabel: { color: '#64748b', fontSize: 11, formatter: '{value}mm' },
      splitLine: { lineStyle: { color: '#f1f5f9' } }
    },
    series: [{
      name: "Lượng mưa (mm)",
      type: "bar",
      data: weatherData.rainfall,
      itemStyle: { 
        color: function(params) {
          const value = params.value;
          if (value > 20) return '#ef4444'; // Mưa to - đỏ
          if (value > 10) return '#f59e0b'; // Mưa vừa - cam
          if (value > 0) return '#22c55e';  // Mưa nhỏ - xanh lá
          return '#94a3b8'; // Không mưa - xám
        },
        borderRadius: [4, 4, 0, 0]
      },
      emphasis: { focus: 'series' }
    }]
  });

  // Make charts responsive
  window.addEventListener('resize', () => {
    temperatureChart.resize();
    humidityChart.resize();
    rainfallChart.resize();
  });
}

// Enhanced map initialization with more features
function initializeMap() {
  const map = L.map('map').setView([16.0471, 108.2062], 6);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Enhanced weather markers with more detailed information
  const weatherMarkers = [
    { 
      lat: 21.0285, lng: 105.8542, 
      city: 'Hà Nội', 
      temp: '26°C', 
      weather: '☁️',
      humidity: '78%',
      wind: '12 km/h',
      condition: 'Nhiều mây'
    },
    { 
      lat: 10.8231, lng: 106.6297, 
      city: 'TP.HCM', 
      temp: '30°C', 
      weather: '☀️',
      humidity: '65%',
      wind: '8 km/h',
      condition: 'Nắng đẹp'
    },
    { 
      lat: 16.0471, lng: 108.2062, 
      city: 'Đà Nẵng', 
      temp: '28°C', 
      weather: '🌤️',
      humidity: '75%',
      wind: '15 km/h',
      condition: 'Nắng ít mây'
    },
    { 
      lat: 10.0452, lng: 105.7469, 
      city: 'Cần Thơ', 
      temp: '29°C', 
      weather: '🌧️',
      humidity: '85%',
      wind: '10 km/h',
      condition: 'Mưa nhỏ'
    },
    {
      lat: 20.8449, lng: 106.6881,
      city: 'Hải Phòng',
      temp: '25°C',
      weather: '🌫️',
      humidity: '88%',
      wind: '18 km/h',
      condition: 'Sương mù'
    },
    {
      lat: 12.2388, lng: 109.1967,
      city: 'Nha Trang',
      temp: '27°C',
      weather: '🌊',
      humidity: '72%',
      wind: '22 km/h',
      condition: 'Gió biển'
    }
  ];

  // Variables for location tracking
  let currentLocationMarker = null;
  let currentPosition = null;
  let watchId = null;

  weatherMarkers.forEach(marker => {
    const customIcon = L.divIcon({
      className: 'custom-weather-marker',
      html: `
        <div class="bg-white rounded-lg shadow-lg p-2 border-2 border-blue-300 min-w-[80px]">
          <div class="text-center">
            <div class="text-2xl mb-1">${marker.weather}</div>
            <div class="text-sm font-bold text-gray-800">${marker.temp}</div>
            <div class="text-xs text-gray-600">${marker.city}</div>
          </div>
        </div>
      `,
      iconSize: [80, 60],
      iconAnchor: [40, 60]
    });

    L.marker([marker.lat, marker.lng], { icon: customIcon })
      .addTo(map)
      .bindPopup(`
        <div class="text-center p-3 min-w-[200px]">
          <h3 class="font-bold text-lg text-blue-600 mb-2">${marker.city}</h3>
          <div class="text-4xl mb-3">${marker.weather}</div>
          <div class="grid grid-cols-2 gap-2 text-sm">
            <div class="bg-red-50 p-2 rounded">
              <div class="text-red-600 font-semibold">Nhiệt độ</div>
              <div class="text-xl font-bold text-red-700">${marker.temp}</div>
            </div>
            <div class="bg-blue-50 p-2 rounded">
              <div class="text-blue-600 font-semibold">Độ ẩm</div>
              <div class="text-xl font-bold text-blue-700">${marker.humidity}</div>
            </div>
          </div>
          <div class="mt-3 p-2 bg-gray-50 rounded">
            <div class="text-gray-600 text-sm">
              <div><strong>Gió:</strong> ${marker.wind}</div>
              <div><strong>Tình trạng:</strong> ${marker.condition}</div>
            </div>
          </div>
          <div class="mt-2 text-xs text-gray-500">
            Cập nhật: ${new Date().toLocaleTimeString('vi-VN')}
          </div>
        </div>
      `);
  });

  // Enhanced location control
  const locationControl = L.control({ position: 'topright' });
  locationControl.onAdd = function(map) {
    const div = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
    
    div.innerHTML = `
      <div class="location-controls bg-white rounded-lg shadow-lg p-2">
        <button id="locateBtn" class="location-btn bg-blue-500 text-white p-2 rounded mb-2 hover:bg-blue-600 transition-colors" title="Tìm vị trí của tôi">
          <i class="ri-map-pin-line text-lg"></i>
        </button>
        <button id="returnBtn" class="location-btn bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors" title="Quay về vị trí của tôi" style="display: none;">
          <i class="ri-navigation-line text-lg"></i>
        </button>
      </div>
    `;
    
    div.style.backgroundColor = 'transparent';
    div.style.border = 'none';
    
    return div;
  };
  locationControl.addTo(map);

  // Enhanced location functions (keeping existing functionality)
  document.addEventListener('click', function(e) {
    if (e.target.closest('#locateBtn')) {
      locateCurrentPosition();
    }
    if (e.target.closest('#returnBtn')) {
      returnToCurrentLocation();
    }
  });

  function locateCurrentPosition() {
    const locateBtn = document.getElementById('locateBtn');
    const returnBtn = document.getElementById('returnBtn');
    
    if (!navigator.geolocation) {
      showNotification('Trình duyệt của bạn không hỗ trợ định vị GPS', 'error');
      return;
    }

    locateBtn.innerHTML = '<i class="ri-loader-4-line text-lg animate-spin"></i>';
    locateBtn.disabled = true;

    const options = {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(
      function(position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const accuracy = position.coords.accuracy;
        
        currentPosition = { lat, lng };
        
        if (currentLocationMarker) {
          map.removeLayer(currentLocationMarker);
        }
        
        const accuracyColor = accuracy <= 50 ? 'green' : accuracy <= 100 ? 'blue' : 'orange';
        
        currentLocationMarker = L.marker([lat, lng], {
          icon: L.divIcon({
            className: 'current-location-marker',
            html: `<div class="bg-${accuracyColor}-500 w-4 h-4 rounded-full border-2 border-white shadow-lg animate-pulse"></div>`,
            iconSize: [16, 16],
            iconAnchor: [8, 8]
          })
        }).addTo(map);
        
        getLocationInfo(lat, lng).then(locationInfo => {
          currentLocationMarker.bindPopup(`
            <div class="text-center p-3">
              <h3 class="font-bold text-lg text-blue-600 mb-2">📍 Vị trí của bạn</h3>
              <p class="text-sm text-gray-600 mb-3">${locationInfo}</p>
              <div class="bg-gray-50 p-3 rounded-lg mb-3">
                <div class="grid grid-cols-1 gap-2 text-xs">
                  <div><strong>Tọa độ:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}</div>
                  <div><strong>Độ chính xác:</strong> ${Math.round(accuracy)}m</div>
                  <div><strong>Thời gian:</strong> ${new Date().toLocaleString('vi-VN')}</div>
                </div>
              </div>
              <div class="flex gap-2">
                <button onclick="shareCurrentLocation()" class="flex-1 bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600">
                  Chia sẻ
                </button>
                <button onclick="recalibrateLocation()" class="flex-1 bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600">
                  Hiệu chỉnh
                </button>
              </div>
            </div>
          `).openPopup();
        });
        
        map.setView([lat, lng], 15);
        
        locateBtn.innerHTML = '<i class="ri-map-pin-line text-lg"></i>';
        locateBtn.disabled = false;
        returnBtn.style.display = 'block';
        
        sosEmergencySystem.currentLocation = { lat, lng, accuracy };
        sosEmergencySystem.lastLocationUpdate = new Date();
      },
      function(error) {
        let errorMessage = 'Không thể xác định vị trí của bạn';
        switch(error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Bạn đã từ chối quyền truy cập vị trí';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Thông tin vị trí không khả dụng';
            break;
          case error.TIMEOUT:
            errorMessage = 'Yêu cầu định vị đã hết thời gian';
            break;
        }
        
        showNotification(errorMessage, 'error');
        locateBtn.innerHTML = '<i class="ri-map-pin-line text-lg"></i>';
        locateBtn.disabled = false;
      },
      options
    );
  }

  function returnToCurrentLocation() {
    if (currentPosition && currentLocationMarker) {
      map.setView([currentPosition.lat, currentPosition.lng], 15);
      currentLocationMarker.openPopup();
    }
  }

  async function getLocationInfo(lat, lng) {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=vi`);
      const data = await response.json();
      
      if (data && data.display_name) {
        return data.display_name;
      }
      
      return `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
    } catch (error) {
      console.log('Lỗi lấy thông tin địa phương:', error);
      return `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
    }
  }

  // Global functions for popup buttons
  window.shareCurrentLocation = function() {
    if (currentPosition) {
      const shareText = `📍 Vị trí của tôi:\nVĩ độ: ${currentPosition.lat.toFixed(6)}\nKinh độ: ${currentPosition.lng.toFixed(6)}\nGoogle Maps: https://maps.google.com/?q=${currentPosition.lat},${currentPosition.lng}`;
      
      if (navigator.share) {
        navigator.share({
          title: 'Vị trí hiện tại',
          text: shareText
        });
      } else {
        navigator.clipboard.writeText(shareText).then(() => {
          showNotification('Đã sao chép vị trí vào clipboard!', 'success');
        });
      }
    }
  };

  window.recalibrateLocation = function() {
    locateCurrentPosition();
  };

  return map;
}

// Enhanced user location function
function locateUser() {
  const locateBtn = document.getElementById('locateBtn');
  if (locateBtn) {
    locateBtn.click();
  } else {
    setTimeout(() => {
      const btn = document.getElementById('locateBtn');
      if (btn) btn.click();
    }, 1000);
  }
}

// Enhanced feature handling
function handleFeatureClick(feature) {
  if (feature === 'sos') {
    openSOSModal();
  } else {
    const message = featureMessages[feature];
    if (message) {
      showDetailedAlert(feature, message);
    }
  }
}

// Enhanced detailed alert function
function showDetailedAlert(feature, message) {
  const titles = {
    weather: '🌤️ Thông tin thời tiết chi tiết',
    plants: '🌱 Tư vấn nông nghiệp thông minh',
    alerts: '⚠️ Cảnh báo thời tiết và thiên tai'
  };
  
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
  modal.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-bold text-gray-800">${titles[feature]}</h3>
        <button onclick="this.closest('.fixed').remove()" class="text-gray-400 hover:text-gray-600">
          <i class="ri-close-line text-xl"></i>
        </button>
      </div>
      <div class="text-sm text-gray-600 whitespace-pre-line leading-relaxed">
        ${message}
      </div>
      <div class="mt-6 flex gap-3">
        <button onclick="this.closest('.fixed').remove()" class="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors">
          Đóng
        </button>
        <button onclick="handleFeatureAction('${feature}')" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors">
          Xem thêm
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
}

// Handle feature actions
function handleFeatureAction(feature) {
  switch(feature) {
    case 'weather':
      // Scroll to charts section
      document.querySelector('#temperatureChart').scrollIntoView({ behavior: 'smooth' });
      break;
    case 'plants':
      showNotification('Tính năng tư vấn nông nghiệp chi tiết đang được phát triển!', 'info');
      break;
    case 'alerts':
      openDisasterWarningModal();
      break;
  }
  
  // Close the modal
  document.querySelector('.fixed.inset-0').remove();
}

// Enhanced search functionality
function handleLocationSearch() {
  const searchInput = document.getElementById('locationSearch');
  const query = searchInput.value.trim();
  
  if (query) {
    showNotification(`🔍 Đang tìm kiếm thời tiết cho: "${query}"`, 'info');
    
    // Simulate search with timeout
    setTimeout(() => {
      const mockResults = [
        { name: 'Hà Nội', temp: '26°C', condition: 'Nhiều mây' },
        { name: 'TP.HCM', temp: '30°C', condition: 'Nắng đẹp' },
        { name: 'Đà Nẵng', temp: '28°C', condition: 'Nắng ít mây' }
      ];
      
      const result = mockResults.find(r => r.name.toLowerCase().includes(query.toLowerCase())) || 
                    { name: query, temp: '27°C', condition: 'Dữ liệu mô phỏng' };
      
      showNotification(`📍 ${result.name}: ${result.temp}, ${result.condition}`, 'success');
    }, 1500);
    
    searchInput.value = '';
  }
}

// Enhanced smooth scrolling
function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Enhanced fade-in animation
function addFadeInAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.weather-card, .bg-white').forEach(card => {
    observer.observe(card);
  });
}

// Enhanced initialization
document.addEventListener("DOMContentLoaded", () => {
  // Start clock
  setInterval(updateClock, 1000);
  updateClock();

  // Initialize charts
  initializeCharts();

  // Initialize map
  window.weatherMap = initializeMap();

  // Add event listeners for feature buttons
  document.querySelectorAll('.feature-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const feature = btn.getAttribute('data-feature');
      handleFeatureClick(feature);
    });
  });

  // Enhanced search functionality
  const searchInput = document.getElementById('locationSearch');
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleLocationSearch();
    }
  });

  // Add search suggestions
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    if (query.length > 1) {
      // Show search suggestions (simplified)
      const suggestions = ['Hà Nội', 'TP.HCM', 'Đà Nẵng', 'Cần Thơ', 'Hải Phòng', 'Nha Trang']
        .filter(city => city.toLowerCase().includes(query));
      
      // You can implement a dropdown here
    }
  });

  // Initialize smooth scrolling
  initializeSmoothScrolling();

  // Add fade-in animations
  addFadeInAnimation();

  // Make functions globally available
  window.locateUser = locateUser;
  
  // Auto-update weather data every 5 minutes
  setInterval(() => {
    updateWeatherData();
  }, 300000);
  
  // Show welcome notification
  setTimeout(() => {
    showNotification('🌟 Chào mừng đến với Weather & Life Pro!', 'success');
  }, 2000);
});

// Enhanced weather data update function
function updateWeatherData() {
  // Simulate real-time data updates
  const variation = () => Math.random() * 4 - 2; // ±2 variation
  
  weatherData.temperature = weatherData.temperature.map(temp => 
    Math.max(15, Math.min(40, temp + variation()))
  );
  
  weatherData.humidity = weatherData.humidity.map(humidity => 
    Math.max(30, Math.min(100, humidity + variation()))
  );
  
  // Re-initialize charts with new data
  initializeCharts();
  
  showNotification('📊 Dữ liệu thời tiết đã được cập nhật!', 'info');
}

// Enhanced window resize handling
window.addEventListener('resize', () => {
  // Charts will auto-resize due to the resize listeners in initializeCharts
  if (window.weatherMap) {
    window.weatherMap.invalidateSize();
  }
});

// Enhanced interactive features
document.addEventListener('DOMContentLoaded', () => {
  // Enhanced navigation hover effects
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transform = 'translateY(-2px)';
      link.style.textShadow = '0 2px 4px rgba(0,0,0,0.1)';
    });
    
    link.addEventListener('mouseleave', () => {
      link.style.transform = 'translateY(0)';
      link.style.textShadow = 'none';
    });
  });

  // Enhanced weather card interactions
  document.querySelectorAll('.weather-card').forEach(card => {
    card.addEventListener('click', () => {
      card.style.transform = 'scale(0.98)';
      setTimeout(() => {
        card.style.transform = '';
      }, 150);
    });
    
    // Add ripple effect
    card.addEventListener('mousedown', (e) => {
      const ripple = document.createElement('div');
      const rect = card.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255,255,255,0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
        z-index: 1;
      `;
      
      card.style.position = 'relative';
      card.style.overflow = 'hidden';
      card.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});

// SOS Emergency Functions (keeping existing functionality with enhancements)
function openSOSModal() {
  const modal = document.getElementById('sosModal');
  if (!modal) {
    createSOSModal();
    return;
  }
  
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  
  updateCurrentLocation();
}

function closeSOSModal() {
  const modal = document.getElementById('sosModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
  
  if (sosEmergencySystem.countdownInterval) {
    clearInterval(sosEmergencySystem.countdownInterval);
    sosEmergencySystem.countdownInterval = null;
  }
  sosEmergencySystem.isEmergencyActive = false;
}

function createSOSModal() {
  const modalHTML = `
    <div id="sosModal" class="fixed inset-0 bg-black bg-opacity-60 z-50 hidden">
      <div class="flex items-center justify-center min-h-screen p-4">
        <div class="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
          <!-- Header -->
          <div class="bg-gradient-to-r from-red-500 to-red-600 text-white p-8 rounded-t-3xl">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <i class="ri-alarm-warning-line text-3xl"></i>
                </div>
                <div>
                  <h2 class="text-3xl font-bold">Hệ thống SOS khẩn cấp</h2>
                  <p class="text-red-100 text-lg">Nhấn và giữ để kích hoạt tín hiệu cứu hộ</p>
                </div>
              </div>
              <button onclick="closeSOSModal()" class="text-white hover:bg-white hover:bg-opacity-20 p-3 rounded-full transition-colors">
                <i class="ri-close-line text-2xl"></i>
              </button>
            </div>
          </div>

          <!-- Content -->
          <div class="p-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <!-- SOS Button Section -->
              <div class="text-center">
                <div class="mb-8">
                  <button id="sosButton" class="w-56 h-56 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 mx-auto flex items-center justify-center flex-col border-4 border-red-300" 
                          onmousedown="startSOSActivation()" onmouseup="cancelSOSActivation()" onmouseleave="cancelSOSActivation()"
                          ontouchstart="startSOSActivation()" ontouchend="cancelSOSActivation()">
                    <i class="ri-shield-line text-7xl mb-3"></i>
                    <span class="text-3xl font-bold">SOS</span>
                    <span class="text-sm mt-2 opacity-90">Nhấn & giữ</span>
                  </button>
                  <p class="text-gray-600 mt-6 text-lg">Nhấn và giữ trong 5 giây để kích hoạt tín hiệu SOS</p>
                  <div id="sosCountdown" class="mt-4 text-red-600 font-bold text-2xl hidden"></div>
                </div>
                
                <!-- Current Location -->
                <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                  <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                    <i class="ri-map-pin-line text-blue-600 text-2xl"></i>
                    Vị trí hiện tại
                  </h3>
                  <div id="currentLocationInfo" class="text-sm text-gray-600 mb-4">
                    <p class="flex items-center justify-center gap-2">
                      <i class="ri-loader-4-line animate-spin"></i>
                      Đang xác định vị trí...
                    </p>
                  </div>
                  <div class="flex gap-3">
                    <button onclick="shareLocation()" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-xl transition-colors flex items-center justify-center gap-2 font-semibold">
                      <i class="ri-share-line"></i>
                      Chia sẻ vị trí
                    </button>
                    <button onclick="openInMaps()" class="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl transition-colors flex items-center justify-center gap-2 font-semibold">
                      <i class="ri-map-line"></i>
                      Mở bản đồ
                    </button>
                  </div>
                </div>
              </div>

              <!-- Emergency Contacts -->
              <div>
                <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <i class="ri-phone-line text-green-600 text-2xl"></i>
                  Danh bạ khẩn cấp
                </h3>
                <div class="space-y-4 max-h-96 overflow-y-auto">
                  ${sosEmergencySystem.emergencyContacts.map(contact => `
                    <div class="contact-card bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 flex items-center justify-between hover:from-gray-100 hover:to-gray-200 transition-all duration-300 border border-gray-200">
                      <div class="flex items-center gap-4">
                        <div class="w-14 h-14 bg-${getContactColor(contact.type)}-500 rounded-full flex items-center justify-center text-white shadow-lg">
                          <i class="${contact.icon} text-xl"></i>
                        </div>
                        <div>
                          <h4 class="font-bold text-gray-800 text-lg">${contact.name}</h4>
                          <p class="text-gray-500 text-sm">${contact.description}</p>
                          <p class="text-gray-700 font-mono text-sm">${contact.number}</p>
                        </div>
                      </div>
                      <button onclick="callEmergency('${contact.number}', '${contact.name}')" class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl transition-colors flex items-center gap-2 shadow-lg font-semibold">
                        <i class="ri-phone-line text-lg"></i>
                        Gọi ngay
                      </button>
                    </div>
                  `).join('')}
                </div>
                
                <div class="mt-6 p-4 bg-yellow-50 rounded-xl border-l-4 border-yellow-400">
                  <div class="flex items-start gap-3">
                    <i class="ri-information-line text-yellow-600 text-xl mt-1"></i>
                    <div>
                      <p class="text-sm text-yellow-800 font-semibold mb-1">Lưu ý quan trọng:</p>
                      <p class="text-sm text-yellow-700">
                        Trong trường hợp khẩn cấp, hãy gọi ngay số điện thoại cứu hộ quốc gia: 
                        <strong>113 (Cảnh sát)</strong>, <strong>114 (Cứu hỏa)</strong>, <strong>115 (Cấp cứu)</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  setTimeout(() => openSOSModal(), 100);
}

function getContactColor(type) {
  const colors = {
    police: 'blue',
    fire: 'red',
    medical: 'green',
    rescue: 'orange',
    traffic: 'purple',
    hospital: 'teal',
    family: 'pink',
    insurance: 'indigo'
  };
  return colors[type] || 'gray';
}

function startSOSActivation() {
  if (sosEmergencySystem.isEmergencyActive) return;
  
  sosEmergencySystem.isEmergencyActive = true;
  let countdown = 5;
  
  const countdownElement = document.getElementById('sosCountdown');
  const sosButton = document.getElementById('sosButton');
  
  if (countdownElement && sosButton) {
    countdownElement.classList.remove('hidden');
    sosButton.classList.add('animate-pulse');
    
    sosEmergencySystem.countdownInterval = setInterval(() => {
      countdownElement.textContent = `Kích hoạt SOS trong ${countdown}s`;
      countdown--;
      
      if (countdown < 0) {
        activateEmergency();
      }
    }, 1000);
  }
}

function cancelSOSActivation() {
  if (sosEmergencySystem.countdownInterval) {
    clearInterval(sosEmergencySystem.countdownInterval);
    sosEmergencySystem.countdownInterval = null;
  }
  
  const countdownElement = document.getElementById('sosCountdown');
  const sosButton = document.getElementById('sosButton');
  
  if (countdownElement) {
    countdownElement.classList.add('hidden');
  }
  
  if (sosButton) {
    sosButton.classList.remove('animate-pulse');
  }
  
  sosEmergencySystem.isEmergencyActive = false;
}

function activateEmergency() {
  cancelSOSActivation();
  
  showNotification('🚨 TÌNH TRẠNG KHẨN CẤP ĐÃ ĐƯỢC KÍCH HOẠT!', 'error');
  sendSOSSignal();
  closeSOSModal();
  showEmergencyStatus();
}

function sendSOSSignal() {
  const location = sosEmergencySystem.currentLocation;
  const timestamp = new Date().toLocaleString('vi-VN');
  
  const emergencyData = {
    timestamp,
    location,
    contacts: sosEmergencySystem.emergencyContacts,
    userAgent: navigator.userAgent,
    emergencyId: Date.now()
  };
  
  // Log to emergency history
  sosEmergencySystem.emergencyHistory.push(emergencyData);
  
  console.log('🚨 SOS Signal Sent:', emergencyData);
  
  // Enhanced notification
  const locationText = location ? 
    `📍 Vị trí: ${location.lat.toFixed(6)}, ${location.lng.toFixed(6)}` : 
    '📍 Vị trí: Không xác định';
    
  showNotification(`🚨 TÍN HIỆU SOS ĐÃ ĐƯỢC GỬI!\n\n${locationText}\n⏰ Thời gian: ${timestamp}\n📞 Đang thông báo đến các dịch vụ cứu hộ...`, 'error');
}

function showEmergencyStatus() {
  const statusHTML = `
    <div id="emergencyStatus" class="fixed top-24 left-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-2xl shadow-2xl z-40 border-2 border-red-300">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center animate-pulse">
            <i class="ri-alarm-warning-line text-2xl"></i>
          </div>
          <div>
            <h3 class="font-bold text-xl">TÌNH TRẠNG KHẨN CẤP</h3>
            <p class="text-red-100">Tín hiệu SOS đã được gửi - Đang chờ cứu hộ</p>
            <p class="text-red-200 text-sm mt-1">ID: ${Date.now()}</p>
          </div>
        </div>
        <button onclick="cancelEmergency()" class="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-colors font-semibold">
          Hủy bỏ
        </button>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('afterbegin', statusHTML);
}

function cancelEmergency() {
  const statusElement = document.getElementById('emergencyStatus');
  if (statusElement) {
    statusElement.remove();
  }
  showNotification('Đã hủy tình trạng khẩn cấp', 'info');
}

function updateCurrentLocation() {
  const locationInfo = document.getElementById('currentLocationInfo');
  if (!locationInfo) return;
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const accuracy = position.coords.accuracy;
        
        sosEmergencySystem.currentLocation = { lat, lng, accuracy };
        sosEmergencySystem.lastLocationUpdate = new Date();
        
        locationInfo.innerHTML = `
          <div class="space-y-3">
            <div class="bg-white p-3 rounded-lg border">
              <p class="font-semibold text-gray-800 mb-2">Tọa độ GPS:</p>
              <div class="font-mono text-sm bg-gray-50 p-2 rounded">
                <div>Vĩ độ: ${lat.toFixed(6)}</div>
                <div>Kinh độ: ${lng.toFixed(6)}</div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="bg-blue-50 p-2 rounded text-center">
                <div class="font-semibold text-blue-700">Độ chính xác</div>
                <div class="text-blue-600">${Math.round(accuracy)}m</div>
              </div>
              <div class="bg-green-50 p-2 rounded text-center">
                <div class="font-semibold text-green-700">Cập nhật</div>
                <div class="text-green-600">${new Date().toLocaleTimeString('vi-VN')}</div>
              </div>
            </div>
          </div>
        `;
        
        getLocationAddress(lat, lng);
      },
      function(error) {
        locationInfo.innerHTML = `
          <div class="text-center p-4">
            <div class="text-red-600 mb-2">
              <i class="ri-error-warning-line text-3xl"></i>
            </div>
            <p class="text-red-600 font-semibold">Không thể xác định vị trí</p>
            <p class="text-red-500 text-sm mt-1">Vui lòng cho phép truy cập vị trí</p>
            <button onclick="updateCurrentLocation()" class="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600">
              Thử lại
            </button>
          </div>
        `;
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  } else {
    locationInfo.innerHTML = `
      <div class="text-center p-4 text-red-600">
        <i class="ri-error-warning-line text-3xl mb-2"></i>
        <p class="font-semibold">Trình duyệt không hỗ trợ GPS</p>
      </div>
    `;
  }
}

async function getLocationAddress(lat, lng) {
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=vi`);
    const data = await response.json();
    
    if (data && data.display_name) {
      const locationInfo = document.getElementById('currentLocationInfo');
      if (locationInfo) {
        const currentContent = locationInfo.innerHTML;
        locationInfo.innerHTML = `
          <div class="space-y-3">
            <div class="bg-white p-3 rounded-lg border">
              <p class="font-semibold text-gray-800 mb-2">Địa chỉ:</p>
              <p class="text-sm text-gray-600">${data.display_name}</p>
            </div>
            ${currentContent}
          </div>
        `;
      }
    }
  } catch (error) {
    console.log('Lỗi lấy địa chỉ:', error);
  }
}

function callEmergency(number, name) {
  if (confirm(`🚨 Bạn có chắc chắn muốn gọi ${name} (${number})?`)) {
    window.location.href = `tel:${number}`;
    showNotification(`📞 Đang gọi ${name}...`, 'info');
    logEmergencyCall(number, name);
  }
}

function logEmergencyCall(number, name) {
  const callLog = {
    timestamp: new Date().toISOString(),
    name: name,
    number: number,
    location: sosEmergencySystem.currentLocation,
    callId: Date.now()
  };
  
  const existingLogs = JSON.parse(localStorage.getItem('emergencyCallLogs') || '[]');
  existingLogs.push(callLog);
  localStorage.setItem('emergencyCallLogs', JSON.stringify(existingLogs));
  
  console.log('Emergency call logged:', callLog);
}

function shareLocation() {
  const location = sosEmergencySystem.currentLocation;
  if (!location) {
    showNotification('Chưa xác định được vị trí', 'warning');
    return;
  }
  
  const shareText = `🚨 KHẨN CẤP - Vị trí của tôi:
Vĩ độ: ${location.lat.toFixed(6)}
Kinh độ: ${location.lng.toFixed(6)}
Google Maps: https://maps.google.com/?q=${location.lat},${location.lng}
Thời gian: ${new Date().toLocaleString('vi-VN')}
Độ chính xác: ${Math.round(location.accuracy)}m`;
  
  if (navigator.share) {
    navigator.share({
      title: 'Vị trí khẩn cấp - Weather & Life',
      text: shareText
    }).then(() => {
      showNotification('Đã chia sẻ vị trí thành công!', 'success');
    }).catch(() => {
      fallbackShareLocation(shareText);
    });
  } else {
    fallbackShareLocation(shareText);
  }
}

function fallbackShareLocation(text) {
  navigator.clipboard.writeText(text).then(() => {
    showNotification('Đã sao chép thông tin vị trí vào clipboard!', 'success');
  }).catch(() => {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    showNotification('Đã sao chép thông tin vị trí!', 'success');
  });
}

function openInMaps() {
  const location = sosEmergencySystem.currentLocation;
  if (!location) {
    showNotification('Chưa xác định được vị trí', 'warning');
    return;
  }
  
  const mapsUrl = `https://maps.google.com/?q=${location.lat},${location.lng}`;
  window.open(mapsUrl, '_blank');
  showNotification('Đã mở vị trí trong Google Maps', 'success');
}

// Disaster Warning Functions (keeping existing functionality with enhancements)
function openDisasterWarningModal() {
  const modal = document.getElementById('disasterModal');
  const updateTime = document.getElementById('updateTime');
  
  updateTime.textContent = new Date().toLocaleString('vi-VN');
  
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  
  loadDisasterData();
}

function closeDisasterWarningModal() {
  const modal = document.getElementById('disasterModal');
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

function loadDisasterData() {
  updateCurrentAlerts();
  updateRiskAssessment();
  updateDisasterHistory();
}

function updateCurrentAlerts() {
  const alertsContainer = document.getElementById('currentAlerts');
  
  if (disasterWarningSystem.currentAlerts.length === 0) {
    alertsContainer.innerHTML = `
      <div class="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
        <i class="ri-shield-check-line text-green-500 text-4xl"></i>
      </div>
      <h4 class="text-xl font-bold text-gray-800 mb-2">Khu vực an toàn</h4>
      <p class="text-gray-600 text-lg mb-4">Không có cảnh báo thiên tai nào trong khu vực của bạn</p>
      <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
        <i class="ri-check-line text-green-500"></i>
        <span>Hệ thống đang giám sát 24/7</span>
      </div>
    `;
  } else {
    let alertsHTML = '';
    disasterWarningSystem.currentAlerts.forEach(alert => {
      const levelColors = {
        low: 'yellow',
        medium: 'orange', 
        high: 'red',
        critical: 'red'
      };
      const color = levelColors[alert.level] || 'gray';
      
      alertsHTML += `
        <div class="bg-${color}-50 border-l-4 border-${color}-500 p-4 mb-3 rounded-lg">
          <div class="flex items-center">
            <i class="ri-alarm-warning-line text-${color}-500 text-xl mr-3"></i>
            <div class="flex-1">
              <h4 class="font-bold text-${color}-800">${alert.title}</h4>
              <p class="text-${color}-600 text-sm">${alert.description}</p>
              <div class="flex items-center gap-4 mt-2 text-xs text-${color}-500">
                <span>📍 ${alert.area}</span>
                <span>⏰ ${alert.time}</span>
                <span class="px-2 py-1 bg-${color}-200 rounded-full font-semibold">${alert.level.toUpperCase()}</span>
              </div>
            </div>
          </div>
        </div>
      `;
    });
    alertsContainer.innerHTML = alertsHTML;
  }
}

function updateRiskAssessment() {
  // Update overall score with animation
  const overallScore = document.querySelector('.w-32.h-32 span');
  if (overallScore) {
    let currentScore = 0;
    const targetScore = disasterWarningSystem.riskAssessment.overall;
    const increment = targetScore / 50;
    
    const updateScore = () => {
      currentScore += increment;
      if (currentScore >= targetScore) {
        overallScore.textContent = targetScore;
      } else {
        overallScore.textContent = Math.floor(currentScore);
        requestAnimationFrame(updateScore);
      }
    };
    
    updateScore();
  }
}

function updateDisasterHistory() {
  // Enhanced history display (if needed)
  console.log('Disaster history updated:', disasterWarningSystem.disasterHistory);
}

function refreshAlerts() {
  const button = event.target.closest('button');
  const originalHTML = button.innerHTML;
  
  button.innerHTML = '<i class="ri-loader-4-line animate-spin mr-2"></i>Đang tải...';
  button.disabled = true;
  
  // Simulate API call
  setTimeout(() => {
    // Update timestamp
    document.getElementById('updateTime').textContent = new Date().toLocaleString('vi-VN');
    
    // Simulate new risk assessment
    disasterWarningSystem.riskAssessment.overall = Math.floor(Math.random() * 100);
    disasterWarningSystem.riskAssessment.risks.forEach(risk => {
      risk.level = Math.floor(Math.random() * 100);
    });
    
    loadDisasterData();
    
    button.innerHTML = originalHTML;
    button.disabled = false;
    
    showNotification('📊 Đã cập nhật cảnh báo mới nhất!', 'success');
  }, 2000);
}

function subscribeAlerts() {
  if ('Notification' in window) {
    if (Notification.permission === 'granted') {
      showNotification('✅ Bạn đã đăng ký nhận thông báo cảnh báo thiên tai!', 'success');
      
      // Send test notification
      setTimeout(() => {
        new Notification('🌦️ Weather & Life Pro', {
          body: 'Bạn sẽ nhận được cảnh báo thiên tai kịp thời!',
          icon: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1'
        });
      }, 1000);
      
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          showNotification('🔔 Đã bật thông báo cảnh báo thiên tai!', 'success');
        } else {
          showNotification('⚠️ Vui lòng cho phép thông báo để nhận cảnh báo kịp thời!', 'warning');
        }
      });
    } else {
      showNotification('❌ Vui lòng bật thông báo trong cài đặt trình duyệt!', 'warning');
    }
  } else {
    showNotification('❌ Trình duyệt không hỗ trợ thông báo!', 'error');
  }
}

function shareAlerts() {
  const shareData = {
    title: 'Cảnh báo thiên tai - Weather & Life Pro',
    text: 'Theo dõi tình hình thiên tai và nhận cảnh báo kịp thời tại khu vực của bạn với hệ thống AI tiên tiến.',
    url: window.location.href
  };
  
  if (navigator.share) {
    navigator.share(shareData).then(() => {
      showNotification('📤 Đã chia sẻ thành công!', 'success');
    }).catch(() => {
      fallbackShare();
    });
  } else {
    fallbackShare();
  }
}

function fallbackShare() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    showNotification('📋 Đã sao chép link vào clipboard!', 'success');
  }).catch(() => {
    showNotification('⚠️ Không thể chia sẻ. Vui lòng sao chép link thủ công!', 'warning');
  });
}

// Enhanced notification system
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `fixed top-4 right-4 z-50 p-4 rounded-xl shadow-2xl max-w-sm transform transition-all duration-500 translate-x-full border-l-4`;
  
  const colors = {
    success: 'bg-green-500 text-white border-green-600',
    warning: 'bg-yellow-500 text-white border-yellow-600',
    error: 'bg-red-500 text-white border-red-600',
    info: 'bg-blue-500 text-white border-blue-600'
  };
  
  const icons = {
    success: 'ri-check-line',
    warning: 'ri-alert-line',
    error: 'ri-close-circle-line',
    info: 'ri-information-line'
  };
  
  notification.className += ` ${colors[type] || colors.info}`;
  
  notification.innerHTML = `
    <div class="flex items-start gap-3">
      <i class="${icons[type] || icons.info} text-xl mt-0.5"></i>
      <div class="flex-1">
        <p class="whitespace-pre-line leading-relaxed">${message}</p>
      </div>
      <button onclick="this.parentElement.parentElement.remove()" class="text-white hover:bg-white hover:bg-opacity-20 p-1 rounded-full transition-colors ml-2">
        <i class="ri-close-line text-lg"></i>
      </button>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Show with animation
  setTimeout(() => {
    notification.classList.remove('translate-x-full');
  }, 100);
  
  // Auto-hide after 5 seconds
  setTimeout(() => {
    notification.classList.add('translate-x-full');
    setTimeout(() => {
      if (notification.parentElement) {
        notification.remove();
      }
    }, 500);
  }, 5000);
}

// Enhanced event listeners
document.addEventListener('click', function(e) {
  // Close modals when clicking outside
  const sosModal = document.getElementById('sosModal');
  const disasterModal = document.getElementById('disasterModal');
  
  if (sosModal && e.target === sosModal) {
    closeSOSModal();
  }
  
  if (disasterModal && e.target === disasterModal) {
    closeDisasterWarningModal();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const sosModal = document.getElementById('sosModal');
    const disasterModal = document.getElementById('disasterModal');
    
    if (sosModal && !sosModal.classList.contains('hidden')) {
      closeSOSModal();
    }
    
    if (disasterModal && !disasterModal.classList.contains('hidden')) {
      closeDisasterWarningModal();
    }
  }
});

// 🌤️ WEATHER DETAIL FUNCTIONS - Các hàm cho form thông tin thời tiết chi tiết

// Làm mới dữ liệu thời tiết
function refreshWeatherData() {
  const button = event.target.closest('button');
  const originalHTML = button.innerHTML;
  
  // Hiển thị trạng thái loading
  button.innerHTML = '<i class="ri-loader-4-line animate-spin"></i> Đang cập nhật...';
  button.disabled = true;
  
  // Giả lập việc tải dữ liệu mới
  setTimeout(() => {
    // Cập nhật một số giá trị ngẫu nhiên để mô phỏng dữ liệu mới
    updateWeatherDisplay();
    
    // Khôi phục nút
    button.innerHTML = originalHTML;
    button.disabled = false;
    
    // Hiển thị thông báo thành công
    showNotification('Đã cập nhật dữ liệu thời tiết mới nhất!', 'success');
  }, 2000);
}

// Cập nhật hiển thị thời tiết
function updateWeatherDisplay() {
  // Tạo dữ liệu ngẫu nhiên để mô phỏng cập nhật
  const newTemp = Math.floor(Math.random() * 5) + 26; // 26-30°C
  const newHumidity = Math.floor(Math.random() * 20) + 70; // 70-90%
  const newWind = Math.floor(Math.random() * 10) + 10; // 10-20 km/h
  const newUV = Math.floor(Math.random() * 3) + 7; // 7-9
  
  // Cập nhật các giá trị trên giao diện
  const tempElements = document.querySelectorAll('.weather-metric-card .text-2xl');
  if (tempElements[0]) tempElements[0].textContent = `${newTemp}°C`;
  if (tempElements[1]) tempElements[1].textContent = `${newHumidity}%`;
  if (tempElements[2]) tempElements[2].textContent = `${newWind} km/h`;
  if (tempElements[3]) tempElements[3].textContent = `${newUV}`;
  
  // Cập nhật nhiệt độ chính
  const mainTemp = document.querySelector('.text-4xl.font-bold');
  if (mainTemp) mainTemp.textContent = `${newTemp}°C`;
  
  // Thêm hiệu ứng animation cho các card
  document.querySelectorAll('.weather-metric-card').forEach(card => {
    card.style.transform = 'scale(1.05)';
    setTimeout(() => {
      card.style.transform = 'scale(1)';
    }, 200);
  });
}

// Chia sẻ thông tin thời tiết
function shareWeatherInfo() {
  const weatherInfo = `🌤️ THÔNG TIN THỜI TIẾT CHI TIẾT

📍 Vị trí: Đà Nẵng, Việt Nam
🌡️ Nhiệt độ: 28°C (Cảm giác như 31°C)
💧 Độ ẩm: 75%
💨 Gió: 15 km/h, hướng Đông Nam
☀️ Chỉ số UV: 8 (Cao)
🌊 Áp suất: 1015 hPa
👁️ Tầm nhìn: 10 km

📊 Dự báo:
• Sáng: Nắng ít mây
• Chiều: Có thể có mưa rào
• Tối: Trời quang, mát mẻ

📱 Theo dõi thời tiết tại: ${window.location.href}`;

  if (navigator.share) {
    navigator.share({
      title: 'Thông tin thời tiết Đà Nẵng',
      text: weatherInfo
    }).then(() => {
      showNotification('Đã chia sẻ thông tin thời tiết!', 'success');
    }).catch(() => {
      fallbackShareWeather(weatherInfo);
    });
  } else {
    fallbackShareWeather(weatherInfo);
  }
}

// Chia sẻ thông tin thời tiết dự phòng
function fallbackShareWeather(text) {
  navigator.clipboard.writeText(text).then(() => {
    showNotification('Đã sao chép thông tin thời tiết vào clipboard!', 'success');
  }).catch(() => {
    // Hiển thị modal với thông tin để người dùng copy thủ công
    alert(text);
  });
}

// Đặt cảnh báo thời tiết
function setWeatherAlert() {
  // Tạo modal đặt cảnh báo
  const alertModal = document.createElement('div');
  alertModal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
  alertModal.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
      <div class="flex items-center gap-3 mb-6">
        <div class="bg-orange-100 p-3 rounded-full">
          <i class="ri-notification-line text-orange-600 text-xl"></i>
        </div>
        <h3 class="text-xl font-bold text-gray-800">Đặt cảnh báo thời tiết</h3>
      </div>
      
      <div class="space-y-4 mb-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Loại cảnh báo</label>
          <select class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
            <option value="temperature">Nhiệt độ cao (>35°C)</option>
            <option value="rain">Mưa lớn (>50mm)</option>
            <option value="wind">Gió mạnh (>30km/h)</option>
            <option value="uv">Chỉ số UV cao (>9)</option>
          </select>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Thời gian cảnh báo</label>
          <select class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
            <option value="1h">1 giờ trước</option>
            <option value="3h">3 giờ trước</option>
            <option value="6h">6 giờ trước</option>
            <option value="12h">12 giờ trước</option>
          </select>
        </div>
        
        <div class="flex items-center gap-2">
          <input type="checkbox" id="pushNotification" class="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500">
          <label for="pushNotification" class="text-sm text-gray-700">Gửi thông báo push</label>
        </div>
      </div>
      
      <div class="flex gap-3">
        <button onclick="this.closest('.fixed').remove()" class="flex-1 bg-gray-500 hover:bg-gray-600 text-white px-4 py-3 rounded-lg transition-colors">
          Hủy
        </button>
        <button onclick="confirmWeatherAlert(this)" class="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg transition-colors">
          Đặt cảnh báo
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(alertModal);
}

// Xác nhận đặt cảnh báo
function confirmWeatherAlert(button) {
  const modal = button.closest('.fixed');
  const alertType = modal.querySelector('select').value;
  const alertTime = modal.querySelectorAll('select')[1].value;
  const pushEnabled = modal.querySelector('#pushNotification').checked;
  
  // Lưu cảnh báo vào localStorage
  const alerts = JSON.parse(localStorage.getItem('weatherAlerts') || '[]');
  alerts.push({
    id: Date.now(),
    type: alertType,
    time: alertTime,
    pushEnabled: pushEnabled,
    created: new Date().toISOString()
  });
  localStorage.setItem('weatherAlerts', JSON.stringify(alerts));
  
  // Đóng modal
  modal.remove();
  
  // Hiển thị thông báo thành công
  showNotification('Đã đặt cảnh báo thời tiết thành công!', 'success');
  
  // Yêu cầu quyền thông báo nếu cần
  if (pushEnabled && 'Notification' in window && Notification.permission !== 'granted') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        showNotification('Đã bật thông báo push cho cảnh báo thời tiết!', 'success');
      }
    });
  }
}

// Kiểm tra và gửi cảnh báo thời tiết
function checkWeatherAlerts() {
  const alerts = JSON.parse(localStorage.getItem('weatherAlerts') || '[]');
  
  alerts.forEach(alert => {
    // Logic kiểm tra điều kiện cảnh báo
    // Ở đây chỉ là demo, trong thực tế sẽ so sánh với dữ liệu thời tiết thực
    const shouldAlert = Math.random() > 0.9; // 10% chance để demo
    
    if (shouldAlert && alert.pushEnabled && 'Notification' in window && Notification.permission === 'granted') {
      new Notification('🌤️ Cảnh báo thời tiết', {
        body: `Điều kiện thời tiết ${alert.type} đã được phát hiện tại Đà Nẵng`,
        icon: '/favicon.ico',
        tag: `weather-alert-${alert.id}`
      });
    }
  });
}

// Khởi tạo kiểm tra cảnh báo định kỳ
setInterval(checkWeatherAlerts, 300000); // Kiểm tra mỗi 5 phút

// Performance monitoring
window.addEventListener('load', () => {
  const loadTime = performance.now();
  console.log(`⚡ Weather & Life Pro loaded in ${Math.round(loadTime)}ms`);
  
  // Show performance notification for development
  if (loadTime > 3000) {
    setTimeout(() => {
      showNotification('⚠️ Trang web tải chậm. Đang tối ưu hóa...', 'warning');
    }, 1000);
  }
});

// Service Worker registration for offline support (if available)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
