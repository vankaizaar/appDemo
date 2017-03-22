<!DOCTYPE html>
<html>
    <head>
        <title>Technites Demo</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">       
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css" />
        <link href="css/main.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <header id="banner" role="banner" class="banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <a class="logo navbar-btn pull-left" href="http://www.technites.com/" title="Home">
                            <img src="images/logo.jpg" alt="Logo Home" />
                        </a>
                    </div> 
                    <div class="col-lg-9">
                        <div class="region region-login-region">
                            <section id="block-block-7" class="block block-block banner-contact-details clearfix">
                                <p>Contact us: <a href="mailto:technites@cumii.net">technites@cumii.net</a></p>
                            </section>
                            <form action="/home?destination=home" method="post" id="user-login-form" accept-charset="UTF-8"><div class="login-form">
                                    <div class="row">
                                        <div class="col-sm-offset-2 col-sm-10">
                                            <div class="col-sm-3 col-sm-offset-1 col-no-padding"><input type="text" name="name" class="form-control form-text required login-form-username" value="" id="edit-name--2" placeholder="Username"></div>
                                            <div class="col-sm-3 col-no-padding"><input type="password" name="pass" class="form-control form-text required login-form-password" value="" id="edit-pass--2" placeholder="Password"></div>
                                            <input type="hidden" name="form_build_id" value="form-JY6XLJoERxCcqEeqNkSVou4UBU7hngp7et-shf0PVSg">
                                            <input type="hidden" name="form_id" value="user_login_block">                                           
                                            <div class="col-sm-2 col-no-padding"><button type="submit" id="edit-submit--2" name="op" class="btn btn-primary form-submit login-form-login-button btn-block">Sign in</button></div>
                                            <div class="col-sm-3 col-no-padding">
                                                <button type="button" class="btn btn-primary dropdown-toggle btn-block" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Create Account <span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu"><li><a href="/technite-register">Create new Technite account</a></li>
                                                    <li><a href="/super-technite-register">Create new Super Technite account</a></li>
                                                    <li><a href="/salesnite-register">Create new Salesnite account</a></li>
                                                    <li><a href="/super-salesnite-register">Create new Super Salesnite account</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div></form><section id="block-block-10" class="block block-block clearfix">
                                <p><a href="user/password">Request new password</a></p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <header id="navbar" role="banner" class="navbar navbar-static-top navbar-default">
            <div class="container">
                <div class="col-md-8">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div class="navbar-collapse collapse">
                        <nav role="navigation">
                            <ul class="menu nav navbar-nav">
                                <li class="first leaf"><a href="http://www.technites.com/" class="active">Home</a></li>
                                <li class="leaf"><a href="http://www.technites.com/about">About</a></li>
                                <li class="leaf"><a href="http://www.technites.com/cumii-products">Products</a></li>
                                <li class="leaf"><a href="http://www.technites.com/enquiry">Enquiry</a></li>
                                <li class="last leaf"><a href="http://www.technites.com/contact">Contact us</a></li>
                            </ul>                                        
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        <section>           
            <div class="container" style="margin-top: 10px">
                <div class="row">
                    <h1>Technites Demo User Flow</h1>
                    <div class="col col-lg-3">
                        <ul class="nav nav-tabs nav-stacked text-center" role="tablist">
                            <li role="presentation" class="active"><a href="#customer" aria-controls="customer" role="tab" data-toggle="tab">Customer</a></li>
                            <li role="presentation"><a href="#dashboard" aria-controls="dashboard" role="tab" data-toggle="tab">Business management dashboard</a></li>
                            <li role="presentation"><a href="#technite" aria-controls="technite" role="tab" data-toggle="tab">Technite</a></li>
                        </ul>
                    </div>
                    <div class="col col-lg-9">
                        <div class="row tab-content">
                            <div role="tabpanel" class="tab-pane fade active in" id="customer">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h2>On customer Device</h2>
                                        <p>Order through the business system, track location of driver in real-time, and rate service.</p>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <h3>When placing the order</h3>
                                                <div class="device-mockup" data-device="macbook" data-orientation="portrait" data-color="white">
                                                    <div class="device">
                                                        <div class="screen">  
                                                            <div class="cust1">
                                                                <img src="images/steps/customer-device/1.png" alt="" class="img-responsive" data-toggle="tooltip" data-placement="right" title="Tooltip on left"/>
                                                                <img src="images/steps/customer-device/2.png" alt="" class="img-responsive" title="Test"/>
                                                                <img src="images/steps/customer-device/3.png" alt="" class="img-responsive" title="Test"/>
                                                            </div>
                                                        </div>
                                                        <div class="button">
                                                            <!-- You can hook the "home button" to some JavaScript events or just remove it -->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <h3>After order has been received and assigned to technite</h3>
                                            <div class="col-md-4 col-md-offset-4">
                                                <div class="device-mockup" data-device="iphone5" data-orientation="portrait" data-color="white">
                                                    <div class="device">
                                                        <div class="screen">
                                                            <div class="cust2">
                                                                <img src="images/steps/customer-device/4.png" alt="" class="img-responsive" title="Test"/>
                                                                <img src="images/steps/customer-device/5.png" alt="" class="img-responsive" title="Test"/>
                                                                <img src="images/steps/customer-device/6.png" alt="" class="img-responsive" title="Test"/>                                                            
                                                                <img src="images/steps/customer-device/8.png" alt="" class="img-responsive" title="Test"/>
                                                                <img src="images/steps/customer-device/9.png" alt="" class="img-responsive" title="Test"/>
                                                                <img src="images/steps/customer-device/10.png" alt="" class="img-responsive" title="Test"/>
                                                            </div>
                                                        </div>
                                                        <div class="button">
                                                            <!-- You can hook the "home button" to some JavaScript events or just remove it -->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane fade" id="dashboard">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h2>Business Management Dashboard</h2>
                                        <p>Dispatch orders to drivers, locate and communicate with drivers.</p>                                        
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="device-mockup" data-device="macbook" data-orientation="portrait" data-color="white">
                                                    <div class="device">
                                                        <div class="screen">
                                                            <div class="dash">
                                                                <img src="images/steps/business-management-dashboard/1.png" alt="" class="img-responsive"/>
                                                                <img src="images/steps/business-management-dashboard/2.png" alt="" class="img-responsive"/>
                                                            </div>
                                                        </div>
                                                        <div class="button">
                                                            <!-- You can hook the "home button" to some JavaScript events or just remove it -->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane fade" id="technite">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h2>Driver Native Mobile App</h2>
                                        <p>Manage orders on the go, share location and communicate with customers.</p>
                                        <div class="row">
                                            <div class="col-md-4 col-md-offset-4">
                                                <div class="device-mockup" data-device="iphone5" data-orientation="portrait" data-color="black">
                                                    <div class="device">
                                                        <div class="screen">
                                                            <div class="tech">
                                                                <img src="images/steps/driver-native-app/1.png" class="img-responsive"/>
                                                                <img src="images/steps/driver-native-app/2.png" class="img-responsive"/>
                                                                <img src="images/steps/driver-native-app/3.png" class="img-responsive"/>
                                                                <img src="images/steps/driver-native-app/4.png" class="img-responsive"/>
                                                                <img src="images/steps/driver-native-app/6.png" class="img-responsive"/>
                                                                <img src="images/steps/driver-native-app/7.png" class="img-responsive"/>
                                                            </div>
                                                        </div>
                                                        <div class="button">
                                                            <!-- You can hook the "home button" to some JavaScript events or just remove it -->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <ul class="list-inline pull-right">
                        <li><button type="button" class="btn btn-primary prev-step">Previous</button></li>
                        <li><button type="button" class="btn btn-primary next-step">Next</button></li>                        
                    </ul>                
                </div>
            </div>
        </section>       
        <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
        <script src="js/main.js" type="text/javascript"></script>
    </body>
</html>
