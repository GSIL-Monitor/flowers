package group.aixiao.flowers.wxuser;

import org.beetl.sql.core.annotatoin.Table;

import java.sql.Timestamp;

@Table(name="newuser")
public class NewUserEntity {
    private Integer id;
    private String openid;
    private String qrcode;
    private Integer pid;
    private String superopenid;
    private Timestamp timestamp;
    private Integer usercount;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getOpenid() {
        return openid;
    }

    public void setOpenid(String openid) {
        this.openid = openid;
    }

    public String getQrcode() {
        return qrcode;
    }

    public void setQrcode(String qrcode) {
        this.qrcode = qrcode;
    }

    public Integer getPid() {
        return pid;
    }

    public void setPid(Integer pid) {
        this.pid = pid;
    }

    public String getSuperopenid() {
        return superopenid;
    }

    public void setSuperopenid(String superopenid) {
        this.superopenid = superopenid;
    }


    public Integer getUsercount() {
        return usercount;
    }

    public void setUsercount(Integer usercount) {
        this.usercount = usercount;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }
}
