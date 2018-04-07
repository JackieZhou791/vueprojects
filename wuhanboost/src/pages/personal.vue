<template>
	<div id="personal-wrapper">
		<div class="userinfo">
			<div class="avatar">
				<img class="user-avatar" src="../assets/images/personal_bg.jpg"/>
			</div>
			<div class="info">
				<div class="nickname">昵称:Jackie</div>
				<div class="userid">UID:11111111</div>
			</div>
		</div>
		<div class="raceinfo">
			<div>你选择的任务为 <span id="racetype" class="blue-font">助力迷你跑</span></div>
			<div>你需完成的跑步里程是：<span id="racedistance" class="blue-font">3</span> KM</div>
			<div>你已经累计跑步 <span id="mydistance" class="blue-font">3</span> 公里</div>
		</div>
		<div class="deadline">活动截止日期：2018年4月15日</div>
		<div class="more">
			<div class="rule-link">了解活动</div>
			<div class="share-link">去跑步</div>
		</div>
	</div>
</template>

<script>
export default {
        data() {
			return {
				message: 'test'
			}
		}
    }
</script>

<style>
#personal-wrapper {
	width: 100%;
	height: 1334px;
	background:  #001d55 url("../assets/images/personal_bg.jpg") no-repeat 50% 0;
}

.userinfo {
	position: relative;
	top: 492px;
	padding-left: 62px;
}

.userinfo .avatar{
	float: left;
	padding-right: 30px;
}

.userinfo .user-avatar {
	float: right;
	width: 160px;
	height: 160px;
	border-radius: 50%;  
	-moz-border-radius: 50%;  
  	-webkit-border-radius: 50%;  
}

.userinfo .info{
	height: 160px;
	font-size: 28px;
	color: #FFFFFF;
	letter-spacing: -0.32px;
	line-height: 35px;
	text-align: left;
	padding: 50px;
}


.raceinfo {
	position: relative;
	top: 492px;
	padding-left: 62px;
	font-size: 30px;
	color: #FFFFFF;
	text-align: left;
}

.deadline {
	position: relative;
	top: 572px;
	opacity: 0.3;
	font-size: 30px;
	color: #FFFFFF;
}

.more {
	position: absolute;
	bottom: 60px;
	line-height: 72px;
	font-size: 30px;
	color: #FFFFFF;
}

.rule-link {
	
	margin-left:40px;
	width: 248px;
	height: 72px;
	float: left;
	background-color: #0D5BFF;
}

.share-link {
	margin-left: 328px;
	width: 380px;
	height: 72px;
	background-color: #F23C3C;
}

.white-img {
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    
    filter: grayscale(100%);
	
    filter: white;
}



</style> 