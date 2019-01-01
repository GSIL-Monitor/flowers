package group.aixiao.flowers.model;

import org.beetl.sql.core.annotatoin.Table;

/**
 * 企业资质信息表
 */
@Table(name="aptitude")
public class AptitudeDO {
    private Integer aid;
    private String image;
    private Integer state;
    private String name;

    public Integer getAid() {
        return aid;
    }

    public void setAid(Integer aid) {
        this.aid = aid;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
