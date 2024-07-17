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
      <div class="left-side">
        <div class="container price-wrapper">
           <form @submit.prevent="submitForm">
    <div class="row">
      <div class="col-md-6">
        <label for="businessIdea">Business Idea</label>
        <input type="text" class="form-control" name="details" id="businessIdea" v-model="formData.details" placeholder="Web crawling tool">
      </div>
      <div class="col-md-6">
        <label for="targetAudience">Target Audience</label>
        <input type="text" class="form-control" name="target_audience" id="targetAudience" v-model="formData.audience" placeholder="Real estate agents">
      </div>
    </div>
    <br>
    <button class="btn btn-primary" type="submit">Generate Free Landing Page Content <i class="fa fa-arrow-circle-right"></i></button>
  </form>
        </div>
      </div>

      <div class="right-side">
        
    <section v-if="showGeneratedContent">
      <div class="container price-wrapper">
        <div class="table-responsive-xl">
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
                    <h3>{{ generatedData.headline }}</h3>
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
                    <p class="mb-0">{{ generatedData.subheadline }}</p>
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
                    <p class="mb-0">{{ generatedData.cta }}</p>
                  </div>
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
                <p class="mb-0" style="white-space: pre-line;">{{ generatedData.features }}</p>
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
                <p class="mb-0" style="white-space: pre-line;">{{ generatedData.benefits }}</p>
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
                <p class="mb-0" style="white-space: pre-line;">{{ generatedData.faqs }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    <section class="py-5">
        <div class="container">
          <div class="row bg-pattern bg-primary-gradient rounded-3 p-7 g-0">
            <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12 col-12">
              <div class="position-relative z-1 my-lg-5">
                <div class="mb-5 text-center">
                  <h3 class="h2 text-white-stable mb-1">Want a custom built MVP in 3 weeks?</h3>
                  <p class="mb-0 text-white-stable">Tell us your email, we will get in touch with you</p>
                </div>
                <form class="row needs-validation g-3" novalidate action="https://web-k1gxqh38b9ow.up-fi-hel1-k8s-1.apps.run-on-seenode.com/api/sendemailFF/" method="post">
                            <div class="col-md-12">
                                <label for="scheduleEmailInput" class="form-label" style="color: white">
                                    Email
                                    <span class="text-danger">*</span>
                                </label>
                                <input type="email" class="form-control" name='email' id="scheduleEmailInput" required />
                                <div class="invalid-feedback">Please
                                    enter email.</div>
                               
                            </div>
                            <div class="col-md-12">
                                <label for="scheduleEmailInput" class="form-label" style="color: white">
                                    Name
                                    <span class="text-danger">*</span>
                                </label>
                                <input type="email" class="form-control" name='name' id="scheduleEmailInput" required />
                                <div class="invalid-feedback">Please
                                    enter email.</div>
                               <input type="email" class="form-control" name='recipient' value="mezardini@gmail.com" id="scheduleEmailInput" hidden />
                               <input type="email" class="form-control" name='redirect_url' value="https://lpcontentai.netlify.app/" id="scheduleEmailInput" hidden />
                            </div>
                            <div class="col-md-12">
                                <label for="scheduleTextarea" class="form-label" style="color: white">Message</label>
                                <textarea class="form-control" name="message" id="scheduleTextarea" placeholder="Briefly describe your idea" rows="3"
                                    required></textarea>
                                <div class="invalid-feedback">Please
                                    write message.</div>
                            </div>
                            <div class="d-grid">
                                <button class="btn btn-primary" type="submit">Let’s work
                                    together!</button>
                            </div>
                        </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      </section>
        
      </div>
    </div>


  </div>
</template>


<script>
export default {
  name: 'GeneratePage',
  data() {
    return {
      formData: {
        details: '',
        audience: ''
      },
      generatedData: {}, // Placeholder for received data
      showGeneratedContent: false // Flag to show generated content section
    };
  },
  methods: {
    submitForm() {
      const url = 'https://partial-marti-redditleadhq-5cacd692.koyeb.app/api/generate-content/'; 
      const token = localStorage.getItem('access_token');
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
          
        },
        body: JSON.stringify({
            details: this.formData.details,
            target_audience: this.formData.audience
          }),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Handle success response from backend
        console.log('Form submission successful:', data);
        this.generatedData = data; // Update generatedData with received JSON data
        this.showGeneratedContent = true; // Show the section with generated content
        // Optionally, reset form fields or show success message
        this.formData.details = '';
        this.formData.target_audience = '';
      })
      .catch(error => {
        // Handle error
        console.error('Error during form submission:', error);
        // Optionally, show an error message to the user
      });
    }
  }
};
</script><style scoped>
/* Add your styles here */
</style>
