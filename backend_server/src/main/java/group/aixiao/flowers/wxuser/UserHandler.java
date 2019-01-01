package group.aixiao.flowers.wxuser;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class UserHandler {

    @Autowired
    NewUserDao newUserDao;

    private final static Logger LOG = LoggerFactory.getLogger(UserHandler.class);

    public void newUser(NewUserEntity nue) {
        newUserDao.insert(nue);
        LOG.info("创建新用户成功!");
    }

}
