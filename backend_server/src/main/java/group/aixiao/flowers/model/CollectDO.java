package group.aixiao.flowers.model;

import org.beetl.sql.core.annotatoin.Table;

import java.time.LocalDateTime;
import java.util.Date;

/**
 * 收藏信息表
 */
@Table(name="collect")
public class CollectDO {
     private Integer cid;
     private Integer uId;
     private Integer cuId;
     private Integer sId;
     private Integer type;
     private Date time;

    public Integer getCid() {
        return cid;
    }

    public void setCid(Integer cid) {
        this.cid = cid;
    }

    public Integer getuId() {
        return uId;
    }

    public void setuId(Integer uId) {
        this.uId = uId;
    }

    public Integer getCuId() {
        return cuId;
    }

    public void setCuId(Integer cuId) {
        this.cuId = cuId;
    }

    public Integer getsId() {
        return sId;
    }

    public void setsId(Integer sId) {
        this.sId = sId;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }
}
