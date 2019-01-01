package group.aixiao.flowers.model;

import org.beetl.sql.core.annotatoin.Table;

/**
 * 系统用户表
 */
@Table(name="sysuser")
public class SysUserDO {
    private Integer id;
    private String name;
    private String pwd;
    private Boolean status;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }
}
