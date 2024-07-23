<template>
  <div>


<!DOCTYPE html>
<html lang="en" style="overflow-x: hidden; max-width: 100%;">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="LpcontentAI: Alpha Test Your Products Pre-Launch. Get valuable feedback from testers before your product goes live.">
    <meta name="keywords" content="LpcontentAI, alpha test, pre-launch, product testing, feedback, testers, review">
    <meta name="author" content="LpcontentAI">
    <meta name="robots" content="index, follow">
    <meta property="og:title" content="LpcontentAI: Alpha Test Your Products Pre-Launch">
    <meta property="og:description"
        content="Get valuable feedback from testers before your product goes live with LpcontentAI.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.LpcontentAI.xyz">
    <meta property="og:image" content="images">
    <meta property="og:image"
        content="https://unpjrqoipuwqbtfujfjf.supabase.co/storage/v1/object/sign/certify/img/web-image-ff.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjZXJ0aWZ5L2ltZy93ZWItaW1hZ2UtZmYucG5nIiwiaWF0IjoxNzE1NzUwNzkzLCJleHAiOjE3NDcyODY3OTN9.URWgrVMMzZO3ZLPnr5F6txNL77kJlgU15rDuANuDbV4&t=2024-05-15T05%3A26%3A33.526Z">
    <meta property="og:site_name" content="LpcontentAI">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="LpcontentAI: Alpha Test Your Products Pre-Launch">
    <meta name="twitter:description"
        content="Get valuable feedback from testers before your product goes live with LpcontentAI.">
    <meta name="twitter:image"
        content="https://unpjrqoipuwqbtfujfjf.supabase.co/storage/v1/object/sign/certify/img/web-image-ff.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjZXJ0aWZ5L2ltZy93ZWItaW1hZ2UtZmYucG5nIiwiaWF0IjoxNzE1NzUwNzkzLCJleHAiOjE3NDcyODY3OTN9.URWgrVMMzZO3ZLPnr5F6txNL77kJlgU15rDuANuDbV4&t=2024-05-15T05%3A26%3A33.526Z">
    <meta name="twitter:creator" content="@0xmezard">
    <title>LpcontentAI</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    
    

</head>

<body>
    <!--  Body Wrapper -->
    <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed">
        <!-- Sidebar Start -->
        <aside class="left-sidebar">
            <!-- Sidebar scroll-->
            <div>
                <div class="brand-logo d-flex align-items-center justify-content-between">
                    <h6>LPContentAI</h6>
                    <div class="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                        <img src="https://qbbnzmzzuixtljvesjmt.supabase.co/storage/v1/object/public/rlhq/dist_assets_logos_Cross.svg"
                            alt="Menu icon" />
                    </div>
                </div>
                <!-- Sidebar navigation-->
                <nav class="sidebar-nav scroll-sidebar" data-simplebar="">
                    <ul id="sidebarnav">
                        <li class="nav-small-cap">
                            <!-- <i class="ti ti-dots nav-small-cap-icon fs-4"></i> -->
                            <!-- <span class="hide-menu">Home</span> -->
                        </li>
                       
                        <li class="sidebar-item" >
                            
                            <a href="generate" class="btn btn-primar" style="background-color: #3b5d50; color: white">Generate Content</a>
                        </li>
                        <li class="nav-small-cap">
                            
                        </li>
                        <li class="sidebar-item" >
                            
                            <button @click="goToGenerate" class="btn btn-primar" style="background-color: #3b5d50; color: white">Logout</button>
                        </li>
                    </ul>
                </nav>
                <!-- End Sidebar navigation -->
            </div>
            <!-- End Sidebar scroll-->
        </aside>
        <!--  Sidebar End -->
        <!--  Main wrapper -->
        <div class="body-wrapper">
            <!--  Header Start -->
            <header class="app-header">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <ul class="navbar-nav">
                        <li class="nav-item d-block d-xl-none">
                            <button class="navbar-toggler offcanvas-nav-btn" type="button">
                                <a href="generate" > <i class="fa fa-arrow-right"></i> </a>
                            </button>
                        </li>
                       
                    </ul>
                    <div class="navbar-collapse justify-content-end px-0" id="navbarNav">
                        <ul class="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                            
                            <li class="nav-item dropdown">
                                <a class="nav-link nav-icon-hover" href="javascript:void(0)" id="drop2"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://qbbnzmzzuixtljvesjmt.supabase.co/storage/v1/object/public/rlhq/user-1.jpg" alt="" width="35" height="35"
                                        class="rounded-circle">
                                </a>
                                
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <!--  Header End -->
             <div class="container-fluid">
                <div v-if="loading">Loading...</div>
                <div v-else>
                <div v-if="error">{{ error }}</div>
                <div v-else>
                    <div class="card" v-for="idea in ideas" :key="idea.id">
                    <div class="card-body">
                        <h5 class="card-title">{{ idea.details }}</h5>
                        <p class="card-text">{{ idea.target_audience }}</p>
                        <a :href="`/content/${idea.id}`" class="btn btn-primary" >View Content</a>
                    </div>
                    </div>
                </div>
                </div>
             </div>
            
        </div>
    </div>

</body>

</html>
  </div>
</template>


<script>
export default {
    name: 'Dashboard-Page',
  data() {
    return {
      ideas: [],
      loading: true,
      error: null,
    };
  },
  mounted() {
    this.fetchData();
    import('@/assets/css/dashboardstyle.css');
    import('@/assets/css/styles.css');
  },
  methods: {
    fetchData() {
        const url = 'https://partial-marti-redditleadhq-5cacd692.koyeb.app/api/dashboard/';
        const token = localStorage.getItem('access_token');

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            this.ideas = data;
            this.loading = false;
        })
        .catch(error => {
            this.error = 'Failed to fetch data';
            this.loading = false;
            console.error('Error during fetch:', error);
        });
    },
}
};
</script>


<style scoped>
/* Add your styles here */
</style>