<template>
  <div>
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
    <nav class="navbar navbar-expand-lg navbar-light w-100">
        <div class="container px-3">
            <h1>LPContentAI</h1>
            <button class="navbar-toggler offcanvas-nav-btn" type="button">
                <a href="generate" > <i class="fa fa-refresh"></i> </a>
            </button>

            <div class="offcanvas offcanvas-start offcanvas-nav" style="width: 20rem">
                <div class="offcanvas-header">
                    <a class="text-inverse"><h1>LPContentAI</h1></a>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body pt-0 align-items-center">
                    <ul class="navbar-nav mx-auto align-items-lg-center">
                       
                    </ul>

                    <button class="btn btn-primary" type="button">
                        <a href="generate" > <i class="fa fa-refresh" style="color: white"></i> </a>
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <div class="container" style="margin-top: 5%;">
      <div class="right-side">
        <section v-if="showGeneratedContent">
          <div class="container price-wrapper">
            <div class="row flex-nowrap pb-4 me-5 me-lg-0">
              <div class="col-xl-4 col-lg-4 col-md-6 col-12">
                <div class="card pricing">
                  <div class="card-body">
                    <h2 class="mb-4 d-flex align-items-center">
                      <div class="price-textx">
                        <div class="price price-show">
                          <span>Headline</span>
                        </div>
                      </div>
                    </h2>
                    <div class="mb-6">
                      <h3>{{ generatedData.headline || 'Loading...' }}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 col-12">
                <div class="card pricing">
                  <div class="card-body">
                    <h2 class="mb-4 d-flex align-items-center">
                      <div class="price-textx">
                        <div class="price price-show">
                          <span>Subheadline</span>
                        </div>
                      </div>
                    </h2>
                    <div class="mb-6">
                      <p class="mb-0">{{ generatedData.subheadline || 'Loading...' }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 col-12">
                <div class="card pricing">
                  <div class="card-body">
                    <h2 class="mb-4 d-flex align-items-center">
                      <div class="price-textx">
                        <div class="price price-show">
                          <span>CTA Button</span>
                        </div>
                      </div>
                    </h2>
                    <div class="mb-6">
                      <p class="mb-0">{{ generatedData.cta || 'Loading...' }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-12 col-lg-12 col-md-12 col-12">
              <div class="card pricing">
                <div class="card-body">
                  <h2 class="mb-4 d-flex align-items-center">
                    <div class="price-textx">
                      <div class="price price-show">
                        <span>Features</span>
                      </div>
                    </div>
                  </h2>
                  <div class="mb-6">
                    <p class="mb-0" style="white-space: pre-line;">{{ generatedData.features || 'Loading...' }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-12 col-lg-12 col-md-12 col-12">
              <div class="card pricing">
                <div class="card-body">
                  <h2 class="mb-4 d-flex align-items-center">
                    <div class="price-textx">
                      <div class="price price-show">
                        <span>Benefits</span>
                      </div>
                    </div>
                  </h2>
                  <div class="mb-6">
                    <p class="mb-0" style="white-space: pre-line;">{{ generatedData.benefits || 'Loading...' }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-12 col-lg-12 col-md-12 col-12">
              <div class="card pricing">
                <div class="card-body">
                  <h2 class="mb-4 d-flex align-items-center">
                    <div class="price-textx">
                      <div class="price price-show">
                        <span>FAQs</span>
                      </div>
                    </div>
                  </h2>
                  <div class="mb-6">
                    <p class="mb-0" style="white-space: pre-line;">{{ generatedData.faqs || 'Loading...' }}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section class="py-5">
          <!-- Form section -->
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentPage',
  data() {
    return {
      generatedData: {}, // Placeholder for received data
      showGeneratedContent: false // Flag to show generated content section
    };
  },
  mounted() {
    const id = this.$route.params.id;
    const token = localStorage.getItem('access_token'); // Assuming the token is stored in localStorage

    fetch(`https://partial-marti-redditleadhq-5cacd692.koyeb.app/api/idea/${id}/`, {
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
    })
      .then(response => response.json())
      .then(data => {
        console.log('API response:', data); // Log the entire response
        console.log('Generated Data:', data.generatedData); // Log the generatedData field
        try {
          // Attempt to parse the JSON string
          this.generatedData = data.generatedData;
          this.showGeneratedContent = true;
          console.log(this.generatedData.headline);
        } catch (error) {
          console.error('Error parsing generatedData:', error);
        }
      })
      .catch(error => console.error('Error fetching content:', error));
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>