package group.aixiao.flowers.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import group.aixiao.flowers.common.HttpClientUtil;
import group.aixiao.flowers.common.JSONResult;
import group.aixiao.flowers.common.JsonUtils;
import group.aixiao.flowers.common.RedisOperator;
import group.aixiao.flowers.model.WXSessionModel;

@RestController
@RequestMapping("/weapp")
public class WXLoginController {
	@Value("${wx.appid}")
	private String appid;

	@Value("${wx.secret}")
	private String secret;
	
	@Autowired
	private RedisOperator redis;
	

	@GetMapping("/wxLogin")
	public JSONResult wxLogin(String code) {
		
		System.out.println("wxlogin - code: " + code);
		
		String url = "https://api.weixin.qq.com/sns/jscode2session";
		Map<String, String> param = new HashMap<>();
		param.put("appid", appid);
		param.put("secret", secret);
		param.put("js_code", code);
		param.put("grant_type", "authorization_code");
		
		String wxResult = HttpClientUtil.doGet(url, param);
		System.out.println(wxResult);

		// 将json 字符串转换为对象
		WXSessionModel model = JsonUtils.jsonToPojo(wxResult, WXSessionModel.class);
		
		// 存入session到redis
		redis.set("key:" + model.getOpenid(),
							model.getSession_key());

		String skey="key:"+model.getOpenid();
		return JSONResult.ok(skey);
	}
	
}
