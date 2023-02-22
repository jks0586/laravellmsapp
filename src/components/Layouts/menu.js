import { AiFillDashboard } from 'react-icons/fa';

const menusitems=[
    {
        "name" : "Dashboard",
        "link" : "/lms/dashboard/admin",
        "icon" : <AiFillDashboard size="20"/>,
        "auth" : "",
       "items":[]
    },
    {
        "name" : "Utilities",
        "link" : "/",
        "icon" : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 float-left mr-0.5">
        <path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
      </svg>`,
        "auth" : "Super Administrator",
        "items" : [
            {
                "name" : "User Auth",
                "link" : "/auth",
                "icon" : "unlock-alt",
                "auth" : "Super Administrator"
            },
            {
                "name" : "Notifications",
                "link" : "/lms/notification",
                "icon" : "bell",
                "auth" : "Super Administrator"
            },
            {
                "name":"Notification Events",
                "link" : "/lms/notification",
                "icon" : "bell",
                "auth" : "Super Administrator"
            },
            {
                "name" : "Menu",
                "link" : "/lms/menu",
                "icon" : "folder-open",
                "auth" : "Super Administrator"
            },
            {
                "name" : "Countries",
                "link" : "/lms/country",
                "icon" : "globe",
                "auth" : "Super Administrator"
            }
            ,
            {
                "name" : "Taxes",
                "link" : "/lms/tax/admin",
                "icon" : "bank",
                "auth" : "Super Administrator"
            },
            {
                "name" : "Certificate Criteria",
                "link" : "/lms/certificateCriteria",
                "icon" : "list-ol",
                "auth" : "Super Administrator"
            },
            {
                "name" : "Answer Types",
                "link" : "/lms/answerType",
                "icon" : "keyboard-o",
                "auth" : "Super Administrator"
            },
            {
                "name" : "Cron Log",
                "link" : "/lms/cronLog",
                "icon" : "clock-o",
                "auth" : "Super Administrator"
            },
            {
                "name" : "Languages",
                "link" : "/lms/language",
                "icon" : "language",
                "auth" : "Super Administrator"
            },
            {
                "name" : "Translations",
                "link" : "/lms/translation",
                "icon" : "retweet",
                "auth" : "Super Administrator"
            },
            {
                "name" : "Help",
                "link" : "/lms/help/admin",
                "icon" : "question-circle",
                "auth" : "Help-admin"
            },
            {
                "name" : "HelpTooltip",
                "link" : "/lms/helpTooltip",
                "icon" : "comment",
                "auth" : "HelpTooltip-admin"
            },
            {
                "name" : "Msg",
                "link" : "/lms/msg",
                "icon" : "comment",
                "auth" : "Msg-admin"
            },
        ]
    },
    {
        "name" : "Users",
        "link" : "",
        "icon" : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 float-left mr-0.5">
        <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" />
        <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
      </svg>`,
        "auth" : "User-menu",
        "items":[
            {
                "name" :"Manage Users",
                "link" : "/lms/user/admin",
                "icon" : "users",
                "auth" : "User-admin"
            },
            {
                "name" :"Business Users",
                "link" : "/lms/userbusiness",
                "icon" : "user-plus",
                "auth" : "Userbusiness-admin",
            },
            {
                "name" :"Bulk Enrolments",
                "link" : "/lms/user/enrol",
                "icon" : "user-plus",
                "auth" : "User-enrol"
            },
            {
                "name" : "MLA User Verification",
                "link" : "/lms/mlauserIdentification",
                "icon" : "photo",
                "auth" : "MlauserIdentification-admin",

            },
            {
                "name" :"ALFA User Verification",
                "link" : "/lms/alfauserIdentification",
                "icon" : "photo",
                "auth" : "AlfauserIdentification-admin",

            },
            {   "name" :"ID Verification",
                "link" : "/lms/userIdentification",
                "icon" : "photo",
                "auth" : "UserIdentification-admin",
            },
            {
                "name" :"Adv. ID Verification",
                "link" : "/lms/userIdentification/advanced",
                "icon" : "magic",
                "auth" : "UserIdentification-admin",
            },
            {
                "name" :"USI Verification",
                "link" : "/lms/userUsi/admin",
                "icon" : "thumbs-up",
                "auth" : "UserUsi-admin",
            },
            {
                "name" : "User Roles",
                "link" : "/lms/authAssignment",
                "icon" : "lock",
                "auth" : "AuthAssignment-admin"
            },
            {
                "name" :"Import",
                "link" : "/lms/user/import",
                "icon" : "download",
                "auth" : "User-import"
            },
            {
                "name" :"Export",
                "link" : "/lms/user/export",
                "icon" : "upload",
                "auth" : "User-export"
            },
            {
                "name" :"Connect",
                "link" : "/lms/connect/admin",
                "icon" : "users",
                "auth" : "User-admin"
            },
        ]
    },
    {
        "name":"Organisation",
        "link" : "",
        "icon" : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 float-left mr-0.5">
        <path d="M15 3.75H9v16.5h6V3.75zM16.5 20.25h3.375c1.035 0 1.875-.84 1.875-1.875V5.625c0-1.036-.84-1.875-1.875-1.875H16.5v16.5zM4.125 3.75H7.5v16.5H4.125a1.875 1.875 0 01-1.875-1.875V5.625c0-1.036.84-1.875 1.875-1.875z" />
      </svg>`,
        "auth" : "Organisation-menu",
        "items":[
         {      "name":"Manage Organisations",
                "link" : "/lms/organisation/admin/",
                "icon" : "sitemap",
                "auth" : "Administer Organisation"
        },
        {       "name":"Trainers",
                "link" : "/lms/trainer/admin/",
                "icon" : "child",
                "auth" : "Trainer-admin"
        },
        {       "name":"Settings",
                "link" : "/lms/organisation/editOrg",
                "icon" : "cog",
                "auth" : "Organisation-update"
        },
        {       "name":"Custom Fields",
                "link" : "/lms/userExtraField",
                "icon" : "edit",
                "auth" : "Coupon-admin"
        },
        {       "name":"Scheduled Emails",
                "link" : "/lms/message",
                "icon" : "envelope-o",
                "auth" : "Message-admin"
        },
        {       "name":"Msg",
                "link" : "/lms/msg",
                "icon" : "comment",
                "auth" : "Msg-admin"
        },
        {       "name":"Surveys",
                "link" : "/lms/survey",
                "icon" : "list-alt",
                "auth" : "Survey-admin"
        }
        ]
    },
    {
        "name" : "Courses",
        "link" : "",
        "icon" : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 float-left mr-0.5">
        <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
        <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
        <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
      </svg>`,
        "auth" : "Course-menu",
        "items":[
            {
                "name" : "Qualifications",
                "link" : "/lms/qualification/admin/",
                "icon" : "graduation-cap",
                "auth" : "Qualification-admin"
            },
            {
                "name" : "Courses",
                "link" : "/lms/course/admin/",
                "icon" : "book",
                "auth" : "Course-admin"
            },
            {
                "name" : "Course Packages",
                "link" : "/lms/package/admin/",
                "icon" : "cubes",
                "auth" : "Package-admin"
            },
            {
                "name" : "Resource Library",
                "link" : "/lms/resource/admin/",
                "icon" : "files-o",
                "auth" : "Resource-admin"
            },
            {
                "name" : "Certificates",
                "link" : "/lms/certificate",
                "icon" : "certificate",
                "auth" : "Certificate-admin"
            },
            {
                "name" : "Cards",
                "link" : "/lms/card",
                "icon" : "credit-card",
                "auth" : "Card-admin"
            },
            {
                "name" : "Course Marking",
                "link" : "/lms/marking",
                "icon" : "check-square-o",
                "auth" : "Marking-admin",
            },
            {
                "name" : "User Qualifications",
                "link" : "/lms/userQualification",
                "icon" : "graduation-cap",
                "auth" : "UserQualification-admin",
            },
            {
                "name" : "NSW RSA",
                "link" : "/lms/nswRsa",
                "icon" : "glass",
                "auth" : "NswRsa-admin"
            },

            {
                "name" : "NSW RSA Online",
                "link" : "/lms/nswrsaonline",
                "icon" : "glass",
                "auth" : "NswRsa-admin"
            },

            {
                "name" : "NSW Licensee Course",
                "link" : "/lms/nswlc",
                "icon" : "glass",
                "auth" : "Nswlc-admin"
            },
            {
                "name" : "NSW Advanced  Licensee Course",
                "link" : "/lms/nswalc",
                "icon" : "glass",
                "auth" : "Nswalc-admin"
            },
            {
                "name" : "VIC RSA",
                "link" : "/lms/vicrsa",
                "icon" : "glass",
                "auth" : "vicrsa-admin"
            },
        ]
    },
    {
        "name" : "Sales",
        "link" : "",
        "icon" : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 float-left mr-0.5">
        <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clip-rule="evenodd" />
      </svg>`,
        "auth" : "Ecommerce menu",
        "items" : [
            {
                "name" : "Invoices",
                "link" : "/lms/invoice/admin",
                "icon" : "file-text-o",
                "auth" : "Invoice-admin"
            },
            {
                "name" : "Coupon Codes",
                "link" : "/lms/coupon",
                "icon" : "credit-card",
                "auth" : "Coupon-admin"
            },
            {
                "name" : "Ad Hoc Payments",
                "link" : "/lms/adHocPayment",
                "icon" : "dollar",
                "auth" : "AdHocPayment-admin"
            },
            {
                "name" : "Exports",
                "link" : "/lms/export",
                "icon" : "file-excel-o",
                "auth" : "Organisation-export"
            },
            ]
        },
        {
            "name" : "Reporting",
            "link" : "",
            "icon" : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 float-left mr-0.5">
            <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z" clip-rule="evenodd" />
          </svg>`,
            "auth" : "Report-admin",
            "items" : [
            {
                "name" : "Custom Reports",
                "link" : "/lms/report",
                "icon" : "line-chart",
                "auth" : "Report-admin"
            },
            {
                "name" : "Avetmiss",
                "link" : "/lms/avetmiss",
                "icon" : "file-zip-o",
                "auth" : "Avetmiss-admin"
            },
        ]
        },
        {
            "name" : "Calendar",
            "link" : "",
            "icon" : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 float-left mr-0.5">
            <path fill-rule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clip-rule="evenodd" />
          </svg>`,
            "auth" : "",
            "items" : [
                {
                    "name" : "Dashboard",
                    "link" : "/lms/calendar/admin",
                    "icon" : "file-text-o",
                    "auth" : ""
                },
                {
                    "name" : "Schedule",
                    "link" : "/lms/calendar/schedule",
                    "icon" : "file-text-o",
                    "auth" : ""
                },
                {
                    "name" : "Website Booking",
                    "link" : "/lms/calendar/booking",
                    "icon" : "dollar",
                    "auth" : ""
                },
                {
                    "name" : "Manual Booking",
                    "link" : "/lms/calendar/reservebooking",
                    "icon" : "file-excel-o",
                    "auth" : ""
                },
                {
                    "name" :  "Services",
                    "link" : "/lms/calendar/services",
                    "icon" : "file-excel-o",
                    "auth" : ""
                },
                {
                    "name" : "Events",
                    "link" : "/lms/calendar/events",
                    "icon" : "file-excel-o",
                    "auth" : ""
                },
                {
                    "name" : "Coupons",
                    "link" : "/lms/calendar/coupons",
                    "icon" : "file-excel-o",
                    "auth" : ""
                },
                {
                    "name" : "Reports",
                    "link" : "/lms/calendar/reports",
                    "icon" : "file-excel-o",
                    "auth" : ""
                },

            ]
        },
        {
            "name" : "Logout",
            "link" : "/logout",
            "icon" : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 float-left mr-0.5"><path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clipRule="evenodd" />
          </svg>`,
          "items":[]
        }
];

export default menusitems;
