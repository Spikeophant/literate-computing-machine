const managerHTML = (data) => `<!-- Team item-->
        <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                <h5 class="mb-0">${data.name}</h5><span class="small text-uppercase text-muted">${data.role}</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item">office: ${data.office}</li>
                </ul>
            </div>
        </div>
        <!-- End--> \n`

const engineerHTML = (data) => `<!-- Team item-->
        <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                <h5 class="mb-0">${data.name}</h5><span class="small text-uppercase text-muted">{${data.role}</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="https://github.com/${data.username}" class="social-link"><i class="fa fa-github"></i></a></li>
                </ul>
            </div>
        </div>
        <!-- End--> \n`

const internHTML = (data) => `<!-- Team item-->
        <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                <h5 class="mb-0">${data.name}</h5><span class="small text-uppercase text-muted">${data.role}</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item">school: ${data.school}</li>
                </ul>
            </div>
        </div>
        <!-- End--> \n`

module.exports = managerHTML();