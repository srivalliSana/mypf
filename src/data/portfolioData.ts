export interface Project {
  id: string;
  repoName: string;
  title: string;
  subtitle: string;
  category: 'remote-sensing' | 'ml-forecasting' | 'analytics';
  categoryLabel: string;
  year: string;
  description: string;
  fullOverview: string;
  datasetInfo: string;
  toolsUsed: string[];
  methodologyPhases: string[];
  metrics: { label: string; value: string; detail: string }[];
  tags: string[];
  techStack: string[];
  demoUrl?: string;
  githubUrl: string;
  featured: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  deliverables: string[];
  technologies: string[];
  repoRef?: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  status: 'In Progress' | 'Completed';
  location: string;
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  period: string;
  category: string;
  skillsCovered: string[];
  badgeColor: string;
}

export interface AchievementItem {
  title: string;
  role: string;
  organization: string;
  year: string;
  description: string;
  badge: string;
}

export const PERSONAL_INFO = {
  name: 'Srivalli Sana',
  role: 'Data Science & Machine Learning Engineer',
  tagline: 'Specialized in Remote Sensing, Hyperspectral/Multispectral Earth Observation & Predictive ML Pipelines.',
  shortBio: 'B.Tech Computer Science student specializing in Data Science at Centurion University. Creator of multispectral crop stress detection workflows, hyperspectral endmember classification systems, on-device QGIS plugins, and deployed forecasting apps.',
  location: 'Vizianagaram, Andhra Pradesh, India',
  email: 'sanasrivalli995@gmail.com',
  github: 'https://github.com/srivalliSana',
  linkedin: 'https://www.linkedin.com/in/srivalli-sana/',
  resumeDriveUrl: 'https://drive.google.com/file/d/1ExE2p2OfSSf0SRxMaXPNDS_vNu__hb_J/view?usp=sharing',
  resumeDownloadUrl: 'https://drive.google.com/uc?export=download&id=1tIqStHVt8ItElfcYKcCoDbdo6RqhVt0A',
};

export const PROOF_METRICS = [
  { value: '4 Bands', label: 'Multispectral Analysis', detail: 'Paddy Sri Lanka Red, Green, Blue, NIR' },
  { value: 'MNF + SAM', label: 'Hyperspectral Pipeline', detail: 'Pixel Purity Index & Spectral Angle Mapper' },
  { value: '38ms', label: 'On-Device WMS', detail: 'Quantized ONNX inference inside QGIS' },
  { value: '35+', label: 'GitHub Repositories', detail: 'Active projects on github.com/srivalliSana' },
];

export const PROJECTS: Project[] = [
  {
    id: 'multispectral-crop-analysis',
    repoName: 'Multispectral-Crop-Analysis',
    title: 'Multispectral Crop Health & Stress Detection',
    subtitle: 'Remote sensing analysis of paddy fields calculating NDVI, SAVI, and False Color Composites for early agricultural stress detection',
    category: 'remote-sensing',
    categoryLabel: 'Remote Sensing & AgriTech',
    year: '2024',
    description: 'Analyzed multispectral satellite imagery on the Paddy Sri Lanka dataset (Red, Green, Blue, NIR) to detect crop stress, disease, and nutrient deficiencies. Computed NDVI and SAVI vegetation indices in ENVI and GIS for precision agriculture decision support.',
    fullOverview: 'Agriculture faces significant productivity loss due to late detection of crop stress, disease, and nutrient deficiencies. Traditional monitoring relies on manual inspection, which is time-consuming and inefficient. This project applies remote sensing and spectral analysis to the Paddy Sri Lanka dataset. By combining radiometric calibration, atmospheric correction, False Color Composite (NIR, Red, Green) visualization, and automated NDVI/SAVI index calculations, the system highlights stressed crop zones and enables targeted agricultural interventions.',
    datasetInfo: 'Paddy Sri Lanka multispectral dataset from Mendeley Data, containing multispectral imagery across Red, Green, Blue, and Near-Infrared (NIR) wavelengths.',
    toolsUsed: ['ENVI for multispectral processing', 'GIS tools for spatial analysis', 'Remote sensing techniques', 'Python & Jupyter'],
    methodologyPhases: [
      '1. Data Import & Band Inspection: Loaded multi-band imagery and verified spectral variability across paddy parcels.',
      '2. Preprocessing & Calibration: Executed radiometric calibration, atmospheric correction, noise reduction, and reflectance generation.',
      '3. False Color Composite (FCC): Generated NIR-Red-Green composites to accentuate healthy vs stressed vegetation boundaries.',
      '4. Vegetation Index Computation: Calculated NDVI for canopy vigor and SAVI to minimize background soil reflectance.',
      '5. Crop Health Spatial Zoning: Classified canopy stress zones to provide actionable decision support for fertilization and irrigation.'
    ],
    metrics: [
      { label: 'Bands Used', value: '4 Bands', detail: 'Red, Green, Blue, Near-Infrared (NIR)' },
      { label: 'Indices', value: 'NDVI & SAVI', detail: 'Normalized Difference & Soil Adjusted Indices' },
      { label: 'Impact', value: 'Early Stress', detail: 'Detects canopy stress before visual signs appear' }
    ],
    tags: ['Multispectral', 'ENVI', 'NDVI', 'SAVI', 'Remote Sensing', 'Precision Agriculture', 'GIS'],
    techStack: ['ENVI', 'GIS Tools', 'Python', 'Remote Sensing', 'Jupyter', 'Paddy Sri Lanka Dataset'],
    githubUrl: 'https://github.com/srivalliSana/Multispectral-Crop-Analysis',
    featured: true
  },
  {
    id: 'hyperspectral-image-analysis',
    repoName: 'Hyperspectral-Image-Analysis',
    title: 'Hyperspectral Image Processing & Classification',
    subtitle: 'High-dimensional spectral analysis workflow implementing MNF noise reduction, PPI endmember extraction, and SAM supervised classification',
    category: 'remote-sensing',
    categoryLabel: 'Hyperspectral Processing & AI',
    year: '2024',
    description: 'Engineered a reproducible 6-phase hyperspectral processing workflow on the HSF Fooding dataset (Uni Tübingen). Applied Minimum Noise Fraction (MNF) rotation, Pixel Purity Index (PPI), and Spectral Angle Mapper (SAM) with majority filtering for material identification.',
    fullOverview: 'Hyperspectral data contains hundreds of narrow contiguous spectral bands, presenting challenges in redundancy, sensor noise, and mixed pixels. Traditional RGB and multispectral imagery cannot distinguish subtle chemical absorption features. This project develops a structured 6-phase workflow in ENVI. By rotating data via Minimum Noise Fraction (MNF) to isolate signal from noise, extracting purest spectral pixels using Pixel Purity Index (PPI), creating regions of interest (ROIs), and classifying via Spectral Angle Mapper (SAM) with post-classification majority filtering, the pipeline achieves accurate material and vegetation classification.',
    datasetInfo: 'HSF Fooding hyperspectral dataset from University of Tübingen (DeepHS-Fruit), capturing high-dimensional spectral reflectance curves across hundreds of contiguous wavelengths.',
    toolsUsed: ['ENVI for hyperspectral image processing', 'Spectral Angle Mapper (SAM)', 'Minimum Noise Fraction (MNF)', 'Pixel Purity Index (PPI)', 'Remote sensing workflows'],
    methodologyPhases: [
      'Phase 1: Signal Optimization (MNF): Applied Minimum Noise Fraction rotation to segregate noise and maximize spectral separability.',
      'Phase 2: Endmember Extraction (PPI): Utilized Pixel Purity Index to isolate extreme, unmixed spectral pixels.',
      'Phase 3: ROI Development: Created clean Regions of Interest (ROIs) from pure endmembers as supervised training baselines.',
      'Phase 4: SAM Classification: Executed Spectral Angle Mapper classification measuring n-dimensional angle between pixel and reference spectra.',
      'Phase 5: Post-Classification Filtering: Applied majority filtering to remove salt-and-pepper speckle noise and ensure spatial continuity.',
      'Phase 6: Statistical Analysis: Extracted class distribution metrics to quantify spatial surface percentages.'
    ],
    metrics: [
      { label: 'Spectral Bands', value: '200+ Bands', detail: 'Continuous high-resolution wavelength coverage' },
      { label: 'Noise Reduction', value: 'MNF Rotation', detail: 'Isolates noise components to improve SNR' },
      { label: 'Algorithm', value: 'SAM Mapping', detail: 'Robust n-dimensional angle classification' }
    ],
    tags: ['Hyperspectral', 'ENVI', 'MNF', 'PPI', 'Spectral Angle Mapper', 'Remote Sensing', 'Material Classification'],
    techStack: ['ENVI', 'Spectral Analysis', 'SAM Classifier', 'PPI Endmembers', 'MNF Transform', 'University of Tübingen Dataset'],
    githubUrl: 'https://github.com/srivalliSana/Hyperspectral-Image-Analysis',
    featured: true
  },
  {
    id: 'wms-semantic-segmentation',
    repoName: 'SEMANTIC-SEGMENTATION-IN-QGIS',
    title: 'On-Device Semantic Segmentation of WMS in QGIS',
    subtitle: 'Extracting geospatial features from ISRO Bhuvan satellite WMS directly into QGIS vector layers',
    category: 'remote-sensing',
    categoryLabel: 'Computer Vision & Geospatial AI',
    year: '2024',
    description: 'Built a specialized segmentation plugin to extract geospatial land-cover features from ISRO Bhuvan WMS maps in QGIS using on-device ONNX Runtime; supports KML, DXF, and GeoJSON polygon exports.',
    fullOverview: 'Geospatial analysts require rapid vectorization of satellite imagery. This repository packages DeepLabV3+ semantic segmentation into an on-device ONNX runtime plugin directly embedded in QGIS. It fetches tiled Bhuvan WMS raster streams, conducts multi-band spectral inference on local CPU/GPU in under 40ms, and exports vectorized polygon masks to KML, DXF, and GeoJSON.',
    datasetInfo: 'Live satellite raster tiles streamed dynamically from ISRO Bhuvan Web Map Services (EPSG:4326).',
    toolsUsed: ['QGIS API', 'Python', 'ONNX Runtime', 'GDAL / OGR', 'OpenCV'],
    methodologyPhases: [
      '1. Dynamic Tile Streaming: Connects to ISRO Bhuvan WMS endpoints and streams 512x512 raster tiles.',
      '2. Local ONNX Inference: Runs quantized DeepLabV3+ model locally without cloud dependency in 38ms.',
      '3. Polygon Extraction: Converts raster classification boundaries into vector polygons using GDAL.',
      '4. Multi-format GIS Export: Streams topological vectors directly to KML, DXF, and GeoJSON.'
    ],
    metrics: [
      { label: 'Mean IoU', value: '94.2%', detail: 'Evaluated on urban, water, and agricultural classes' },
      { label: 'Edge Latency', value: '38ms', detail: 'Local CPU inference per 512x512 tile' },
      { label: 'Model Size', value: '42MB', detail: 'Lightweight ONNX quantization' }
    ],
    tags: ['Computer Vision', 'ONNX', 'QGIS Plugin', 'ISRO Bhuvan', 'GDAL', 'Geospatial AI'],
    techStack: ['Python', 'ONNX Runtime', 'QGIS API', 'GDAL', 'OpenCV', 'PyTorch'],
    demoUrl: 'https://effulgent-arithmetic-2d38ce.netlify.app/',
    githubUrl: 'https://github.com/srivalliSana/SEMANTIC-SEGMENTATION-IN-QGIS',
    featured: true
  },
  {
    id: 'aqi-forecasting-app',
    repoName: 'AQI_Forecasting_Including_Streamlit',
    title: 'AQI Forecasting Web App',
    subtitle: 'Real-time Air Quality Index predictive modeling web application deployed with Streamlit',
    category: 'ml-forecasting',
    categoryLabel: 'Time Series & Environmental ML',
    year: '2024',
    description: 'Interactive Streamlit app predicting Air Quality Index (AQI) using trained scikit-learn machine learning models, multi-pollutant feature pipelines, and joblib serialization.',
    fullOverview: 'Urban atmospheric pollution poses immediate public health risks. Built with Scikit-learn and Streamlit, this application ingests multi-pollutant sensor inputs (PM2.5, PM10, NO2, SO2, CO), runs feature normalization, and predicts AQI values in real-time with EPA and CPCB health risk categorization.',
    datasetInfo: 'Historical continuous atmospheric monitoring station sensor data comprising multi-pollutant concentrations.',
    toolsUsed: ['Python', 'scikit-learn', 'Streamlit', 'Pandas', 'Joblib', 'XGBoost'],
    methodologyPhases: [
      '1. Data Ingestion: Aggregates PM2.5, PM10, NO2, SO2, CO, and temperature measurements.',
      '2. Feature Pipeline: Normalizes skewed concentrations and computes rolling lag variables.',
      '3. Regressor Ensembles: Trained Random Forest and Gradient Boosting models serialized via Joblib.',
      '4. Web Interface: Real-time interactive Streamlit web dashboard with instant health advisory.'
    ],
    metrics: [
      { label: 'R² Score', value: '0.941', detail: 'High predictive variance explained' },
      { label: 'RMSE', value: '12.4', detail: 'Low Root Mean Squared Error' },
      { label: 'Latency', value: '< 15ms', detail: 'Instantaneous client calculation' }
    ],
    tags: ['Time Series', 'Streamlit', 'scikit-learn', 'Predictive ML', 'Joblib'],
    techStack: ['Python', 'scikit-learn', 'Streamlit', 'XGBoost', 'Pandas', 'Joblib'],
    demoUrl: 'https://aqiforecastingincludingapp-opxvrzwr99qgvbbyp9sud4.streamlit.app/',
    githubUrl: 'https://github.com/srivalliSana/AQI_Forecasting_Including_Streamlit',
    featured: true
  },
  {
    id: 'employee-attrition-prediction',
    repoName: 'Employee_Attrition_Prediction',
    title: 'Employee Attrition Prediction',
    subtitle: 'Supervised classification app predicting workforce turnover risk and key workplace factors',
    category: 'ml-forecasting',
    categoryLabel: 'Supervised Learning & HR Analytics',
    year: '2024',
    description: 'Interactive Streamlit classification app evaluating 30+ workplace variables (tenure, overtime, compensation, satisfaction) to predict turnover risk and support retention strategies.',
    fullOverview: 'Employee turnover impacts organizational productivity. This machine learning application evaluates key variables such as compensation, overtime, work-life balance, and tenure to compute flight risk probability and feature importance breakdowns for human resources decision-makers.',
    datasetInfo: 'Comprehensive organizational HR dataset capturing demographic, performance, and tenure variables.',
    toolsUsed: ['Python', 'scikit-learn', 'Streamlit', 'Seaborn', 'Matplotlib', 'Pandas'],
    methodologyPhases: [
      '1. Imbalance Correction: Applied SMOTE and stratified cross-validation on imbalanced churn records.',
      '2. Supervised Training: Evaluated Logistic Regression, Random Forest, and XGBoost classifiers.',
      '3. Risk Scoring: Generates calibrated flight probabilities and identifies top retention drivers.',
      '4. Decision Dashboard: Streamlit scenario interface allowing HR leaders to simulate interventions.'
    ],
    metrics: [
      { label: 'ROC-AUC', value: '0.892', detail: 'Strong discriminative capability' },
      { label: 'Recall', value: '86.5%', detail: 'Prioritized identifying flight risks' },
      { label: 'Precision', value: '82.8%', detail: 'Minimizes false alarms' }
    ],
    tags: ['Classification', 'HR Analytics', 'Streamlit', 'Random Forest', 'scikit-learn'],
    techStack: ['Python', 'scikit-learn', 'Streamlit', 'Pandas', 'Seaborn', 'Matplotlib'],
    demoUrl: 'https://employeeattritionprediction-tm3uaycgjvfxbyk9wwpuni.streamlit.app/',
    githubUrl: 'https://github.com/srivalliSana/Employee_Attrition_Prediction',
    featured: true
  },
  {
    id: 'quality-quest-sbi',
    repoName: 'tableau_dashboard_quaity-quest',
    title: 'Quality Quest — State Bank of India Dashboard',
    subtitle: 'Tableau dashboard analyzing bank staff behavior, digital services, and branch turnaround KPIs',
    category: 'analytics',
    categoryLabel: 'Tableau & Banking Analytics',
    year: '2024',
    description: 'Tableau dashboard for comprehensive analysis of customer satisfaction KPIs across State Bank of India branches, evaluating staff behavior and digital service bottlenecks.',
    fullOverview: 'Developed for the State Bank of India customer service analysis, Quality Quest synthesizes multi-branch customer encounters into an executive Tableau dashboard. It correlates staff behavior ratings, query resolution turnaround times, digital kiosk adoption, and Net Promoter Scores (NPS).',
    datasetInfo: 'State Bank of India customer satisfaction surveys and multi-branch transaction log metrics.',
    toolsUsed: ['Tableau Desktop', 'SQL', 'Data Modeling', 'Excel / CSV ETL'],
    methodologyPhases: [
      '1. Data Modeling: Structured customer survey responses and branch performance metrics.',
      '2. Calculated Fields: Built dynamic multi-tier aggregates and weighted NPS formulas.',
      '3. Interactive Design: Implemented parameter actions, drill-down filters, and geo-branch views.',
      '4. Actionable Insights: Pinpointed queue bottlenecks and digital kiosk adoption opportunities.'
    ],
    metrics: [
      { label: 'Records', value: '15,000+', detail: 'Customer surveys analyzed' },
      { label: 'KPIs', value: '12 Metrics', detail: 'Staff courtesy, resolution latency, NPS' },
      { label: 'Optimization', value: '-28% Wait', detail: 'Projected wait time reduction with kiosks' }
    ],
    tags: ['Tableau', 'Customer Analytics', 'Data Modeling', 'Banking Intelligence'],
    techStack: ['Tableau', 'SQL', 'Data Modeling', 'Excel / CSV ETL'],
    githubUrl: 'https://github.com/srivalliSana/tableau_dashboard_quaity-quest',
    featured: true
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Data Science Intern',
    company: 'Codec Technologies India Pvt. Ltd.',
    period: 'Nov 2024 – Dec 2024',
    location: 'Remote / India',
    type: 'Internship',
    summary: 'Engineered predictive machine learning pipelines, conducted hyperparameter optimization, and built analytics visualization suites.',
    deliverables: [
      'Developed ML pipelines for predictive analytics; tuned hyperparameters and engineered features to improve model accuracy.',
      'Owned data preprocessing, cleaning, outlier handling, and diagnostic visualization to support business decisions.',
      'Constructed exploratory analytics suites in Python using Seaborn, Matplotlib, and Pandas.'
    ],
    technologies: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Feature Engineering', 'Hyperparameter Tuning', 'Matplotlib']
  },
  {
    role: 'Data Science & Machine Learning Intern',
    company: 'Next24 Technologies',
    period: '2024',
    location: 'Virtual / India',
    type: 'Internship',
    summary: 'Built machine learning classification algorithms, exploratory data workflows, and predictive models.',
    deliverables: [
      'Implemented data wrangling and statistical analysis pipelines across real-world datasets.',
      'Evaluated classification and regression algorithms, measuring precision, recall, and F1 scores.',
      'Documented and published reproducible Jupyter notebooks and workflows.'
    ],
    technologies: ['Python', 'scikit-learn', 'Data Wrangling', 'Jupyter', 'Pandas'],
    repoRef: 'https://github.com/srivalliSana/internship-in-next24-technologies'
  },
  {
    role: 'Data Science Intern',
    company: 'Bharat Intern',
    period: '2023 – 2024',
    location: 'Virtual / India',
    type: 'Internship',
    summary: 'Developed predictive modeling solutions including automobile price prediction and exploratory statistical analysis.',
    deliverables: [
      'Engineered end-to-end regression pipelines predicting market values from multi-dimensional features.',
      'Applied cross-validation, feature normalization, and residual diagnostic analysis.',
      'Delivered clean project codebases and technical documentation.'
    ],
    technologies: ['Python', 'Machine Learning', 'Regression', 'Data Analysis', 'scikit-learn'],
    repoRef: 'https://github.com/srivalliSana/Bharath-internship'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering (Data Science)',
    institution: 'Centurion University of Technology and Management',
    period: '2022 – 2026',
    status: 'In Progress',
    location: 'Vizianagaram, Andhra Pradesh',
    highlights: [
      'Specializing in Data Science, Machine Learning, Computer Vision, and Geospatial Analysis.',
      'Active participant in Smart India Hackathon and builder of open-source GIS tools.'
    ]
  },
  {
    degree: 'Higher Secondary Education (12th Grade)',
    field: 'Science & Mathematics (MPC)',
    institution: 'AP Model School and Junior College',
    period: '2020 – 2022',
    status: 'Completed',
    location: 'Andhra Pradesh',
    highlights: ['Strong foundation in Advanced Mathematics, Calculus, and Computer Science fundamentals.']
  },
  {
    degree: 'Secondary School Certificate (10th Grade)',
    field: 'General Academics',
    institution: 'AP Model School and Junior College',
    period: '2020',
    status: 'Completed',
    location: 'Andhra Pradesh',
    highlights: ['Graduated with distinction and academic honors.']
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Introduction to Machine Learning: Art of the Possible',
    issuer: 'Amazon Web Services (AWS)',
    period: 'Verified',
    category: 'Cloud & AI Certification',
    skillsCovered: ['Cloud ML Pipelines', 'Supervised & Unsupervised Learning', 'AWS SageMaker', 'Responsible AI'],
    badgeColor: '#FF9900'
  },
  {
    title: 'GIS, Drones and Machine Learning for Resource Mapping',
    issuer: 'NPTEL+ • IIT Madras & CUTM',
    period: '12-Week Intensive Program',
    category: 'Geospatial ML & Remote Sensing',
    skillsCovered: ['Satellite Remote Sensing', 'UAV / Drone Photogrammetry', 'Multispectral Analysis', 'Geospatial Machine Learning in QGIS'],
    badgeColor: '#00838F'
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: 'Smart India Hackathon (SIH)',
    role: 'Participant & ML Engineer',
    organization: 'Ministry of Education & AICTE',
    year: '2023, 2024',
    description: 'Selected to participate in the national-level hackathon tackling complex computational and data challenges.',
    badge: 'National Participant'
  },
  {
    title: 'Open Source ML & AI Projects',
    role: 'Creator & Maintainer',
    organization: 'GitHub Community (srivalliSana)',
    year: '2023 – Present',
    description: 'Built and published 35+ open-source repositories on GitHub including QGIS plugins, Streamlit apps, and remote sensing tools.',
    badge: 'Active Contributor'
  }
];

export const SKILL_CATEGORIES = [
  {
    category: 'Remote Sensing & Geospatial',
    description: 'Multispectral/hyperspectral processing, ENVI, and QGIS',
    skills: [
      { name: 'ENVI Image Processing', level: 96 },
      { name: 'Multispectral Analysis (NDVI, SAVI)', level: 95 },
      { name: 'Hyperspectral (MNF, PPI, SAM)', level: 94 },
      { name: 'QGIS & Plugin Development', level: 95 },
      { name: 'ISRO Bhuvan WMS / WFS', level: 92 },
      { name: 'GDAL / OGR / GeoPandas', level: 88 }
    ]
  },
  {
    category: 'Machine Learning & AI',
    description: 'Predictive modeling, neural architectures, and optimization',
    skills: [
      { name: 'scikit-learn', level: 95 },
      { name: 'XGBoost & Ensembles', level: 90 },
      { name: 'TensorFlow & PyTorch', level: 84 },
      { name: 'ONNX Runtime Optimization', level: 90 },
      { name: 'Time-Series Forecasting', level: 88 },
      { name: 'Computer Vision & Segmentation', level: 92 }
    ]
  },
  {
    category: 'Programming & Data Science',
    description: 'Languages, data wrangling, and scientific computing',
    skills: [
      { name: 'Python', level: 96 },
      { name: 'Java', level: 82 },
      { name: 'Pandas & NumPy', level: 95 },
      { name: 'Data Preprocessing & Cleaning', level: 94 },
      { name: 'SQL & Relational Queries', level: 85 },
      { name: 'Model Serialization (.pkl / .onnx)', level: 92 }
    ]
  },
  {
    category: 'Visualization & Deployment',
    description: 'Interactive dashboards and web app hosting',
    skills: [
      { name: 'Streamlit Web Deployment', level: 95 },
      { name: 'Tableau Desktop & Dashboards', level: 90 },
      { name: 'Matplotlib & Seaborn', level: 92 },
      { name: 'Netlify Cloud Hosting', level: 88 },
      { name: 'Git & GitHub Workflows', level: 94 }
    ]
  }
];
