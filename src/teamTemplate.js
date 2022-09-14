const baseTemplate = string => `<!-- https://www.bootdey.com/snippets/view/simple-team-cards#bootstrap-4-5-0 -->
<html lang="HTML">
<head>

    <title>Team Page - Change Me!</title></head>
<link rel="stylesheet" href="./teamTemplate.css" />
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
<body class="layout-horizontal ">
<div class="page-wrapper" id="page-wrapper">
    <main class="content">
        <div
                class="flex"><div
                class="p-3 pt-0 pb-0"><div
                class="row"><div
                class="col-xl-12 col-lg-12 col-md-12 preview-content" id="preview">
<div class="container py-5">
    <div class="row mb-4">
        <div class="col-lg-5">
            <h2 class="display-4 font-weight-light">Our team</h2>
            <p class="font-italic text-muted">Our Amazing Team!</p>
        </div>
    </div>

    <div class="row text-center">
        ${string}

    </div>
</div>
        </div>
        </div>
        </div>
        </div>
    </main>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
</body>
</html>`;

module.exports = baseTemplate;