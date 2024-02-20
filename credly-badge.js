// credly-badge.js

document.addEventListener("DOMContentLoaded", function() {

    var badgeId = "2cc1a937-3f20-4a9a-abeb-e50b22c5b836";
    var badgeContainer = document.getElementById("credlyBadgeContainer");

    var credlyBadge = document.createElement("div");
    credlyBadge.setAttribute("data-iframe-width", "150");
    credlyBadge.setAttribute("data-iframe-height", "270");
    credlyBadge.setAttribute("data-share-badge-id", badgeId);
    credlyBadge.setAttribute("data-share-badge-host", "https://www.credly.com");

    badgeContainer.appendChild(credlyBadge);

    var script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "//cdn.credly.com/assets/utilities/embed.js";

    badgeContainer.appendChild(script);
});


