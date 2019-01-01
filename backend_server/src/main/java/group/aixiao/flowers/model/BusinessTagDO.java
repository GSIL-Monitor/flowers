package group.aixiao.flowers.model;

import org.beetl.sql.core.annotatoin.Table;

/**
 * 主营业务标签表
 */
@Table(name="business_tag")
public class BusinessTagDO {
    private Integer btid;
    private String name;

    public Integer getBtid() {
        return btid;
    }

    public void setBtid(Integer btid) {
        this.btid = btid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
